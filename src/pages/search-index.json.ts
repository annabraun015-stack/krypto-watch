import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  const searchIndex = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.id.replace(/^(de|en)\//, '').replace(/\.mdx?$/, ''),
    locale: post.data.locale,
    category: post.data.category,
    image: post.data.image
  }));

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
