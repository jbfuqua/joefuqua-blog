import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

let fontCache: { regular: ArrayBuffer; italic: ArrayBuffer } | null = null;

async function loadFonts() {
  if (fontCache) return fontCache;

  const [regular, italic] = await Promise.all([
    fetch('https://fonts.gstatic.com/s/librebaskerville/v24/kmKWZrc3Hgbbcjq75U4uslyuy4kn0qNccR04_RUJeby2OU36SgNK.ttf').then(r => r.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/librebaskerville/v24/kmKUZrc3Hgbbcjq75U4uslyuy4kn0olVQ-LglH6T17uj8Q4SCQ.ttf').then(r => r.arrayBuffer()),
  ]);

  fontCache = { regular, italic };
  return fontCache;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('anb');
  return posts.map((post) => ({
    params: { slug: post.data.slug || post.id },
    props: {
      title: post.data.title,
      issue: post.data.issue ?? 0,
    },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { title, issue } = props as { title: string; issue: number };
  const fonts = await loadFonts();

  const isLong = title.length > 40;
  const titleSize = isLong ? 40 : 52;
  const lineHeight = 1.25;
  const maxTitleHeight = Math.ceil(titleSize * lineHeight * 2);

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          background: '#f5f0e8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          fontFamily: 'Libre Baskerville',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontSize: '22px',
                color: '#8a8070',
              },
              children: `Algorithm & Blues · #${issue}`,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      fontSize: `${titleSize}px`,
                      fontStyle: 'italic',
                      color: '#1c1914',
                      textAlign: 'center',
                      lineHeight,
                      maxWidth: '1000px',
                      maxHeight: `${maxTitleHeight}px`,
                      overflow: 'hidden',
                    },
                    children: title,
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      width: '280px',
                      height: '2px',
                      background: '#c8901a',
                      borderRadius: '1px',
                    },
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                borderTop: '1px solid #c8b89a',
                paddingTop: '20px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', fontSize: '20px', color: '#8a8070' },
                    children: 'joefuqua.blog',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', fontSize: '18px', color: '#a09080' },
                    children: 'Joe Fuqua',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Libre Baskerville', data: fonts.regular, weight: 400, style: 'normal' },
        { name: 'Libre Baskerville', data: fonts.italic, weight: 400, style: 'italic' },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
