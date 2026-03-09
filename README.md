# joefuqua.blog

Personal site and writing archive for Joe Fuqua.

## Stack
- [Astro](https://astro.build) — static site generator
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting & CDN

## Local Development

```bash
npm install
npm run dev        # starts at http://localhost:4321
```

## Adding Content

**New article:** Drop a `.md` file into `src/content/articles/` with this frontmatter:
```yaml
---
title: "Your Article Title"
date: 2026-03-15
category: governance        # governance | futures | technology-society
slug: your-article-slug
excerpt: "One sentence summary."
source: original            # original | linkedin
---

Your article body here in Markdown.
```

**New A&B issue:** Drop a `.md` file into `src/content/anb/` with:
```yaml
---
title: "Issue Title"
date: 2026-03-15
issue: 44
category: algorithm-and-blues
slug: algorithm-blues-44
excerpt: "One sentence summary."
source: original
---
```

## Deployment

Push to GitHub. Cloudflare Pages builds automatically on every push to `main`.

Build command: `npm run build`  
Output directory: `dist`
