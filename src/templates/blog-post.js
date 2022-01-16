import React from "react";
import { Styled, css } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import PostFooter from "../components/post-footer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { formatReadingTime } from "../utils/helpers";
import PostTag from "../components/post-tag";

const Post = props => {
  const {
    data: {
      blogPost,
      previous,
      next,
      markdownRemark: {
        fields: {
          readingTime: { minutes }
        }
      },
      site: {
        siteMetadata: { title }
      }
    },
    location
  } = props;
  const post = blogPost;
  const readTimeData = formatReadingTime(minutes)

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
              {post.date}&nbsp;&nbsp;
              {readTimeData.type === 'coffee' && <span role="img" aria-label="coffee">☕️</span>}
              {readTimeData.type === 'lunch' && <span role="img" aria-label="lunch">🍱</span>}
              <Styled.strong css={css({ pl: '8px' })}>{readTimeData.minutes} minutes</Styled.strong>
            </Styled.strong>
          </small>
        </Styled.p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Styled.em>
        	Tagged with:
        </Styled.em>{" "}
        {post.tags
          ? post.tags.map(tag => <PostTag key={tag} tag={tag} />)
          : null}
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query GetPost($slug: String!, $previousSlug: String, $nextSlug: String) {
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
      excerpt
      body
      title
      date(formatString: "MMMM DD, YYYY")
      tags
    }
    previous: blogPost(slug: { eq: $previousSlug }) {
      slug
      title
    }
    next: blogPost(slug: { eq: $nextSlug }) {
      slug
      title
    }
  }
`;
