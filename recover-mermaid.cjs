const fs = require('fs');
const path = require('path');

const BLOG_DIRS = [
  'src/content/blog/en',
  'src/content/blog/de'
];

function recoverAndFix(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Find all <div class="mermaid"> blocks
  const mermaidRegex = /<div class="mermaid">([\s\S]*?)<\/div>/g;
  
  content = content.replace(mermaidRegex, (match, script) => {
    // 1. STRIP ALL QUOTES to reach a "raw" state
    // This is safe because almost none of the original diagrams used quotes correctly
    let rawScript = script.replace(/"/g, '');

    // 2. APPLY CORRECT QUOTING SURGICALLY
    let fixedScript = rawScript;

    // Ordered replacement (longest to shortest to avoid partial matches)
    const pairs = [
      { start: '([', end: '])' },
      { start: '((', end: '))' },
      { start: '[[', end: ']]' },
      { start: '[',  end: ']' },
      { start: '(',  end: ')' },
      { start: '{',  end: '}' },
      { start: '>',  end: ']' }
    ];

    pairs.forEach(pair => {
      const s = pair.start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const e = pair.end.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Regex: StartBracket (Non-quoted content) EndBracket
      // We use a negative lookahead for quotes if we were not stripping them, 
      // but since we stripped them, we just match and wrap.
      const regex = new RegExp(`${s}([^\\r\\n${e.slice(-2)}]+?)${e}`, 'g');
      fixedScript = fixedScript.replace(regex, (m, text) => {
        const trimmed = text.trim();
        if (trimmed.length === 0) return m;
        return `${pair.start}"${trimmed}"${pair.end}`;
      });
    });

    // Clean up non-standard trailing semicolons
    fixedScript = fixedScript.replace(/;\s*$/gm, '');
    
    // Ensure the tags are on their own lines for MDX safety (prevents inline p-tag issues)
    return `\n<div class="mermaid">\n${fixedScript.trim()}\n</div>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Recovered and fixed: ${filePath}`);
  }
}

BLOG_DIRS.forEach(dir => {
  const fullPath = path.resolve(dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.mdx'));
  files.forEach(file => recoverAndFix(path.join(fullPath, file)));
});
