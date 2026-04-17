import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../lib/config";

type Entry = {
  loc: string;
  lastmod?: string;
  changefreq: "weekly" | "monthly";
  priority: string;
};

const abs = (path: string) => new URL(path, siteConfig.siteUrl).toString();
const xmlEscape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async () => {
  const posts = (await getCollection("posts", ({ data }) => data.published))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const latest = posts[0]?.data.date.toISOString();

  const entries: Entry[] = [];

  entries.push({
    loc: abs("/"),
    lastmod: latest,
    changefreq: "weekly",
    priority: "1.0",
  });

  entries.push({
    loc: abs("/tags"),
    lastmod: latest,
    changefreq: "weekly",
    priority: "0.5",
  });

  const uniqueTags = [...new Set(posts.flatMap((p) => p.data.tags))];
  for (const tag of uniqueTags) {
    entries.push({
      loc: abs(`/tags/${encodeURIComponent(tag)}`),
      lastmod: latest,
      changefreq: "weekly",
      priority: "0.5",
    });
  }

  for (const post of posts) {
    entries.push({
      loc: abs(`/${post.id}`),
      lastmod: post.data.date.toISOString(),
      changefreq: "monthly",
      priority: "0.8",
    });
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map((e) => {
        const parts = [`    <loc>${xmlEscape(e.loc)}</loc>`];
        if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
        parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
        parts.push(`    <priority>${e.priority}</priority>`);
        return `  <url>\n${parts.join("\n")}\n  </url>`;
      })
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
