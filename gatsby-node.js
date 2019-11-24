const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve("./src/templates/blog-post.js");
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { published: { eq: true } } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const previousSlug =
      index === posts.length - 1 ? null : posts[index + 1].node.fields.slug;
    const nextSlug = index === 0 ? null : posts[index - 1].node.fields.slug;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previousSlug,
        nextSlug
      }
    });
  });

  const tagsPage = path.resolve("./src/templates/tag-page.js");
  const uniqueTags = Array.from(
    new Set(
      posts
        .map(p => p.node.frontmatter.tags)
        .reduce((acc, tag) => acc.concat(tag))
    )
  );
  uniqueTags.forEach(tag => {
    createPage({
      path: "/tags/" + tag,
      component: tagsPage,
      context: {
        tag
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value
    });
  }
};
