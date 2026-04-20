const fs = require('fs');
const path = require('path');

const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else if (file.endsWith('.mdx')) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walk(blogDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 0. CLEANUP PREVIOUS CORRUPTIONS if any
    // Fix truncated anchors like <a id="calculation)
    content = content.replace(/<a id="([^"]+)\)?\s*$/gm, '<a id="$1"></a>');
    // Fix headers that were corrupted
    content = content.replace(/(##+\s+.*?) <a id="([^"]+)">?<\/a>?/g, '$1 <a id="$2"></a>');

    // 1. Fix Header IDs: ## Header {#id} -> ## Header <a id="id"></a>
    // Matches at start of line, ensures no newlines in the capture
    content = content.replace(/^(#+\s+[^\n#]+?)\s+\{#([^\}\n]+)\}\s*$/gm, '$1 <a id="$2"></a>');

    // 2. Fix Mermaid Braces only inside Mermaid blocks
    
    // Process fenced blocks
    content = content.replace(/```mermaid([\s\S]*?)```/g, (match, code) => {
        const fixedCode = code.replace(/(\w+)\{([^\}\n]+)\}/g, '$1([' + '$2' + '])');
        return '```mermaid' + fixedCode + '```';
    });

    // Process div blocks
    content = content.replace(/<div class="mermaid">([\s\S]*?)<\/div>/g, (match, code) => {
        const fixedCode = code.replace(/(\w+)\{([^\}\n]+)\}/g, '$1([' + '$2' + '])');
        return '<div class="mermaid">' + fixedCode + '</div>';
    });

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated: ${file}`);
    }
});
