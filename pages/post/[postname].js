import React, { useEffect } from "react";
import styled from "styled-components";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import Prism from "prismjs";
import readingTime from "reading-time";

import Layout from "../../components/Layout";

const StyledHeadingPrimary = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-family: "Merriweather", serif;
`;

const StyledPostLink = styled.a`
  display: block;
  color: black;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  padding: 1rem 0;
  margin: 0.75rem 0;
`;

const StyledParagraph = styled.p`
  margin-top: 0.2rem;
  letter-spacing: 0.4px;
  color: black;
`;

const StyledSection = styled.section`
  font-family: "Muli", sans-serif;
  letter-spacing: 0.4px;
  figure {
    img {
      width: 100%;
    }
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
`;

const serializers = {
  types: {
    codesandbox: ({ url }) => (
      <iframe
        src={url}
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="blissful-shtern-qnwj3"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    ),
    code: ({ node }) => (
      <pre className={`language-javascript`}>
        <code>{node.code}</code>
      </pre>
    ),
  },
};

const BlogPost = (props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout
      pageTitle={`Ryan's Dev Blog | ${props.title}`}
      description={props.blurb}
    >
      <StyledPostLink href="/posts/" passHref>
        &larr; All blog posts
      </StyledPostLink>
      <article>
        <StyledHeadingPrimary>{props.title}</StyledHeadingPrimary>
        <StyledParagraph>
          {new Date(props._createdAt).toLocaleDateString()}
        </StyledParagraph>
        <StyledSection>
          <BlockContent
            blocks={props.body}
            serializers={serializers}
            {...client.config()}
          />
          {props.codesandbox && (
            <StyledIframe
              src={props.codesandbox}
              title="blissful-shtern-qnwj3"
              allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            ></StyledIframe>
          )}
        </StyledSection>
      </article>
      <StyledPostLink href="/posts" passHref>
        &larr; All Blog Posts
      </StyledPostLink>
    </Layout>
  );
};

export async function getStaticPaths() {
  const stuff = await client.fetch(
    `
  *[_type == "post"]
`
  );

  const paths = stuff.map((post) => ({
    params: { postname: post.slug.current.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async function ({ params: { postname: slug } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]
  `;
  const props = await client.fetch(query, { slug });
  return { props };
};

export default BlogPost;
