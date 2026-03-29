import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "nhivn",
      name: "omnia-blog",
    },
  },
  ui: {
    brand: { name: "Omnia" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        excerpt: fields.text({
          label: "Excerpt",
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        categories: fields.array(fields.text({ label: "Category" }), {
          label: "Categories",
          itemLabel: (props) => props.value,
        }),
        comments: fields.checkbox({ label: "Enable comments" }),
        published: fields.checkbox({
          label: "Published",
          defaultValue: false,
        }),
        content: fields.mdx({
          label: "Content",
        }),
      },
    }),
  },
});
