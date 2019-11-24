import React from "react";
import { Styled, css } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import PostFooter from "./post-footer";
import Layout from "./layout";
import SEO from "./seo";
import { formatReadingTime } from "../utils/helpers";

const Post = props => {
  const {
    data: {
      blogPost,
      markdownRemark: {
        fields: {
          readingTime: { minutes }
        }
      },
      site: {
        siteMetadata: { title }
      }
    },
    location,
    previous,
    next
  } = props;
  const post = blogPost;

  return (
    <Layout location={location} title={title}>
      <SEO title={post.title} description={post.excerpt} />
      <main>
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3
          })}
        >
          <small>
            <Styled.strong css={css({ color: "secondary" })}>
              {post.date}&nbsp;&nbsp;{formatReadingTime(minutes)}
            </Styled.strong>
          </small>
        </Styled.p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        readingTime {
          minutes
        }
      }
    }
    blogPost(slug: { eq: $slug }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
