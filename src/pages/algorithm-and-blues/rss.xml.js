import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const issues = await getCollection('anb');

  const publishedIssues = issues
    .filter((issue) => issue.data.draft !== true)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Algorithm & Blues',
    description: 'AI research translated into decisions executives can actually make.',
    site: context.site,
    items: publishedIssues.map((issue) => ({
      title: issue.data.title,
      link: `/algorithm-and-blues/${issue.data.slug || issue.id}/`,
      pubDate: issue.data.date,
      description: issue.data.excerpt,
    })),
    customData: '<language>en-us</language>',
  });
}
