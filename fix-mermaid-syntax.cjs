const fs = require('fs');
const path = require('path');

const BLOG_DIRS = [
  'src/content/blog/en',
  'src/content/blog/de'
];

function fixMermaidSyntax(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Find all <div class="mermaid"> blocks
  const mermaidRegex = /<div class="mermaid">([\s\S]*?)<\/div>/g;
  
  content = content.replace(mermaidRegex, (match, script) => {
    let sanitizedScript = script;

    // Pattern for labels: matches (BracketStart)(Text)(BracketEnd)
    // We target common Mermaid bracket types: [ ], ( ), ([ ]), (( )), [[ ]], { }, > ]
    // The regex ensures we only pick up text that isn't already quoted.
    const labelRegex = /([\[\(\>{]|\[\[|\(\[|\(\(|>)(?!\s*")([^"\r\n]+?)(?!"\s*)([\]\)\}]|\]\]|\)\]|\)\))/g;
    
    sanitizedScript = sanitizedScript.replace(labelRegex, (m, start, text, end) => {
      const trimmedText = text.trim();
      // Only wrap if it contains something other than alphanumeric characters or is multi-word
      // Actually, quoting EVERYTHING inside brackets is the safest way for Mermaid v10.9.5.
      if (trimmedText.length === 0) return m;
      return `${start}"${trimmedText}"${end}`;
    });

    // Remove non-standard trailing semicolons while we are at it
    sanitizedScript = sanitizedScript.replace(/;\s*$/gm, '');

    return `<div class="mermaid">${sanitizedScript}</div>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed Mermaid syntax in: ${filePath}`);
  }
}

BLOG_DIRS.forEach(dir => {
  const fullPath = path.resolve(dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.mdx'));
  files.forEach(file => fixMermaidSyntax(path.join(fullPath, file)));
});
