import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import { Styled, css } from "theme-ui";
import { formatReadingTime } from "../utils/helpers";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/home-footer";
import PostTag from "../components/post-tag";

const Posts = props => {
  const { location, data } = props;
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;
  const socialLinks = data.site.siteMetadata.social;

  return (
    <Layout location={location} title={siteTitle}>
      <main>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const keywords = node.keywords || [];
          return (
            <Fragment key={node.fields.slug}>
              <SEO title="Home" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={{
                      textDecoration: "none"
                    }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>
                  <Styled.strong css={css({ color: "secondary" })}>
                    {node.frontmatter.date}&nbsp;&nbsp;
                    {formatReadingTime(node.fields.readingTime.minutes)}
                  </Styled.strong>
                </small>

                <Styled.div css={css({mb:4})}>
                  <Styled.p css={css({mb:0})}>{node.frontmatter.excerpt}</Styled.p>
                  {node.frontmatter.tags
                    ? node.frontmatter.tags.map(tag => (
                        <PostTag key={tag} tag={tag} />
                      ))
                    : null}
                </Styled.div>
              </div>
            </Fragment>
          );
        })}
      </main>
      <Footer socialLinks={socialLinks} />
    </Layout>
  );
};

export default Posts;

export const query = graphql`
  query {
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
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              minutes
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            excerpt
          }
        }
      }
    }
  }
`;
