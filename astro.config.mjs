import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const rehypePlugins = [
  rehypeSlug,
  [
    rehypeAutolinkHeadings,
    {
      behavior: "prepend",
      properties: {
        className: ["heading-anchor"],
        ariaHidden: true,
        tabIndex: -1,
      },
    },
  ],
];

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    mdx({ rehypePlugins }),
    react(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
    rehypePlugins,
  },
});
