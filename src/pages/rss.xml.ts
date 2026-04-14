import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const nieuws = await getCollection('nieuws');
  const posts = nieuws.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Stichting Open Spraaktechnologie',
    description: 'Nieuws over open Nederlandse spraaktechnologie',
    site: context.site ?? 'https://openspraaktechnologie.org',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/nieuws/${post.slug}/`,
    })),
  });
}
