module.exports = {
  siteMetadata: {
    title: `Omnia`,
    author: `Nhi Nguyen`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kylemathews`
    }
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        contentPath: `content/posts`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`
  ]
};
