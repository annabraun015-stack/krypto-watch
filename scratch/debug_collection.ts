
import { getCollection } from 'astro:content';

async function debug() {
  try {
    const allPosts = await getCollection('blog');
    console.log(`Total posts found: ${allPosts.length}`);
    
    const dePosts = allPosts.filter(p => p.data.locale === 'de');
    console.log(`German posts found: ${dePosts.length}`);
    
    dePosts.forEach(p => {
      console.log(`- ID: ${p.id}, Title: ${p.data.title}, Date: ${p.data.date}, Draft: ${p.data.draft}`);
    });
  } catch (e) {
    console.error("Error loading collection:", e);
  }
}

debug();
