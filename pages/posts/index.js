import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import PostList from "../../components/PostList";

import Layout from "../../components/Layout";

const StyledHeadingPrimary = styled.h1`
  font-size: 2rem;
  font-family: "Merriweather", serif;
  padding: 0.5rem 0;
`;

const StyledPostLink = styled.a`
  display: block;
  color: black;
  text-transform: capitalize;
  padding: 0.2rem;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  padding: 1rem 0;
`;

const StyledParagraph = styled.p`
  margin-top: 0.2rem;
  letter-spacing: 0.4px;
  color: black;
`;

const StyledSection = styled.section`
  font-family: "Muli", sans-serif;
  letter-spacing: 0.4px;
`;

const AllPosts = ({ posts }) => {
  return (
    <Layout
      pageTitle={`Ryan's Dev Blog | All Posts`}
      description="All blog posts."
    >
      <article>
        <StyledHeadingPrimary>All Posts</StyledHeadingPrimary>
        <PostList posts={posts} />
      </article>
      <footer>
        <StyledPostLink href="/" passHref>
          &larr; Back to Homepage
        </StyledPostLink>
      </footer>
    </Layout>
  );
};

AllPosts.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const posts = await client.fetch(
    `
    *[_type == "post"]
  `,
    { slug }
  );

  return { posts };
};
export default AllPosts;