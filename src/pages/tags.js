import React from "react";
import { graphql } from "gatsby";
import { Styled, css } from "theme-ui";
import Layout from "../components/layout";
import Footer from "../components/home-footer";
import PostTag from "../components/post-tag";

const Tags = props => {
  const { location, data } = props;
  const posts = data.allMarkdownRemark.edges;
  const uniqueTags = Array.from(
    new Set(
      posts
        .map(p => p.node.frontmatter.tags)
        .reduce((acc, tag) => acc.concat(tag))
    )
  );
  const siteTitle = data.site.siteMetadata.title;
  const socialLinks = data.site.siteMetadata.social;

  return (
    <Layout location={location} title={siteTitle}>
      <main>
        <Styled.h3>Showing all tags</Styled.h3>
        <ul
          css={css({
            listStyleType: "none"
          })}
        >
          {uniqueTags.map(tag => (
            <li key={tag}>
              <PostTag key={tag} tag={tag} color="secondary" />
            </li>
          ))}
        </ul>
      </main>
      <Footer socialLinks={socialLinks} />
    </Layout>
  );
};

export default Tags;

export const query = graphql`
  query GetTags {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
