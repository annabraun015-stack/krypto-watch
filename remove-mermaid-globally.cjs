const fs = require('fs');
const path = require('path');

const BLOG_DIRS = [
  'src/content/blog/en',
  'src/content/blog/de'
];

function removeMermaid(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;

  // Regex to match:
  // 1. The Mermaid div block
  // 2. Any trailing caption in parentheses and italics, e.g., *(Above: ...)*
  // We handle potential variations in spacing.
  const mermaidAndCaptionRegex = /\r?\n<div class="mermaid">[\s\S]*?<\/div>(\r?\n\s*\*\(.*?\)\*)?/g;
  
  content = content.replace(mermaidAndCaptionRegex, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed Mermaid from: ${filePath}`);
  }
}

BLOG_DIRS.forEach(dir => {
  const fullPath = path.resolve(dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.mdx'));
  files.forEach(file => removeMermaid(path.join(fullPath, file)));
});
