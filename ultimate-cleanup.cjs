const fs = require('fs');
const path = require('path');

const BLOG_DIRS = [
  'src/content/blog/en',
  'src/content/blog/de'
];

function ultimateCleanup(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Find and fix all Mermaid blocks
  const mermaidRegex = /<div class="mermaid">([\s\S]*?)<\/div>/g;
  
  content = content.replace(mermaidRegex, (match, script) => {
    // 1. COMPLETELY STRIP ALL QUOTES
    // We are resetting all diagrams to their raw state.
    let raw = script.replace(/"/g, '');

    // 2. RE-APPLY QUOTING SCRIPT (CLEANER VERSION)
    // We only target specific bracket patterns that we KNOW are labels.
    // Order: Longest/Complex first.
    let fixed = raw;

    // Pattern: ID([Label])
    fixed = fixed.replace(/(\[|\(|\(\[|\(\(|>)([\s\S]+?)([\]\)\}]|\]\]|\)\]|\)\))/g, (m, start, text, end) => {
        // Double check we don't have nested brackets due to my previous failures
        const cleanText = text.replace(/[\[\]\(\)\{\}]/g, '').trim();
        if (cleanText.length === 0) return m;
        return `${start}"${cleanText}"${end}`;
    });

    // Final scrub: sometimes arrows have extra > at the end or start. 
    // Mermaid is TD, so we keep -->
    
    return `<div class="mermaid">\n${fixed.trim()}\n</div>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Ultimate fix applied: ${filePath}`);
  }
}

BLOG_DIRS.forEach(dir => {
  const fullPath = path.resolve(dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.mdx'));
  files.forEach(file => ultimateCleanup(path.join(fullPath, file)));
});
