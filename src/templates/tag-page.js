import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import { Styled, css } from "theme-ui";
import { Badge } from "@theme-ui/components";
import { formatReadingTime } from "../utils/helpers";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/home-footer";
import PostTag from "../components/post-tag";

const TagPage = props => {
  const { location, data } = props;
  const posts = data.allMarkdownRemark.edges;
  const totalCount = data.allMarkdownRemark.totalCount;
  const siteTitle = data.site.siteMetadata.title;
  const socialLinks = data.site.siteMetadata.social;

  return (
    <Layout location={location} title={siteTitle}>
      <main>
        <Styled.h3 css={css({ lineHeight: 1.6 })}>
          Showing {totalCount} post{totalCount > 1 ? "s" : ""} with{" "}
          <Badge
            css={css({
              bg: "secondary",
              color: "background",
              padding: "8px 10px",
              borderRadius: 9999,
              fontSize: 3,
              lineHeight: 1.1
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

                <Styled.div css={css({ mb: 4 })}>
                  <Styled.p css={css({ mb: 0 })}>
                    {node.frontmatter.excerpt}
                  </Styled.p>
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

export default TagPage;

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
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
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
