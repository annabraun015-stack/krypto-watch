import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.mdx')) results.push(file);
    }
  });
  return results;
}

const files = walk('src/content/blog');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace ## Header {#id} with <h2 id="id">Header</h2>
  content = content.replace(/^## (.*?) \{#(.*?)\}/gm, '<h2 id="$2">$1</h2>');
  content = content.replace(/^### (.*?) \{#(.*?)\}/gm, '<h3 id="$2">$1</h3>');
  
  fs.writeFileSync(file, content);
  console.log(`Processed ${file}`);
});
