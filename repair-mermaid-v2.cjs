const fs = require('fs');
const path = require('path');

const BLOG_DIRS = [
  'src/content/blog/en',
  'src/content/blog/de'
];

function repairMermaid(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  const mermaidRegex = /<div class="mermaid">([\s\S]*?)<\/div>/g;
  
  content = content.replace(mermaidRegex, (match, script) => {
    // 1. Completely strip all quotes to start over
    let raw = script.replace(/"/g, '');

    let fixed = raw;

    // 2. Fix the brackets that were corrupted by the previous "strip everything" script
    // We restore specific bracket types based on IDs
    // Example: A(Text") -> A(Text)
    fixed = fixed.replace(/([\[\(\{\])([\s\S]+?)([\]\)\}]|\]\]|\)\]|\)\))/g, (m, start, text, end) => {
        // Clean text - removing any accidental bracket leftovers
        const cleanText = text.replace(/[\[\]\(\)\{\}]/g, '').trim();
        if (cleanText.length === 0) return m;

        // Restore proper quoting for Mermaid v10
        return `${start}"${cleanText}"${end}`;
    });

    // 3. Fix the "Arrow-to-ID" spacing: -->ID -> --> ID
    fixed = fixed.replace(/(-->|-.->|==>)([a-zA-Z0-9])/g, '$1 $2');

    return `<div class="mermaid">\n${fixed.trim()}\n</div>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Repaired: ${filePath}`);
  }
}

BLOG_DIRS.forEach(dir => {
  const fullPath = path.resolve(dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.mdx'));
  files.forEach(file => repairMermaid(path.join(fullPath, file)));
});
