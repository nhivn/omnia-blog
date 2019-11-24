import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import { Styled, css } from "theme-ui";
import { Badge } from "@theme-ui/components";
import { formatReadingTime } from "../utils/helpers";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/home-footer";

const Posts = props => {
  const { location, data } = props;
  const posts = data.allMarkdownRemark.edges;
  const totalCount = data.allMarkdownRemark.totalCount;
  const siteTitle = data.site.siteMetadata.title;
  const socialLinks = data.site.siteMetadata.social;

  return (
    <Layout location={location} title={siteTitle}>
      <main>
        <Styled.h3>
          Showing {totalCount} post{totalCount > 1 ? "s" : ""} with tag{" "}
          <Badge
            css={css({
              bg: "secondary",
              color: "background",
              padding: 10,
              borderRadius: 9999,
              fontSize: 3
            })}
          >
            #{props.pageContext.tag}
          </Badge>
        </Styled.h3>
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

                <Styled.p>
                  {node.frontmatter.excerpt}
                  <Styled.div>
                    {node.frontmatter.tags
                      ? node.frontmatter.tags.map(tag => (
                          <Badge
                            css={css({
                              color: "primary",
                              bg: "background"
                            })}
                          >
                            #
                            <Styled.a as={Link} to={`/tags/${tag}`}>
                              {tag}
                            </Styled.a>
                          </Badge>
                        ))
                      : null}
                  </Styled.div>
                </Styled.p>
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
  query GetAllPostsWithTags($tag: String) {
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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
