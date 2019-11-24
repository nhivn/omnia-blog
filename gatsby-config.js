module.exports = {
  siteMetadata: {
    title: "Omnia",
    author: "Nhi Nguyen",
    description: "A starter blog demonstrating what Gatsby can do.",
    siteUrl: "https://blog.nhivn.dev/",
    social: [
      {
        name: "Twitter",
        url: "https://twitter.com/nnnhiii"
      },
      {
        name: "GitHub",
        url: "https://github.com/nhivn"
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog-core",
      options: {
        contentPath: "content/posts"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-reading-time"]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Omnia`,
        short_name: `Omnia`,
        start_url: `/`,
        icon: `./content/assets/icon.svg`
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-twitter",
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui"
  ]
};
