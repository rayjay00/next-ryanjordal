import Layout from "../components/Layout";
import PostList from "../components/PostList";
import ProjectList from "../components/ProjectList";
import client from "../client";

const Index = ({ posts, projects }) => {
  return (
    <Layout
      pageTitle="Ryan Jordal | Home"
      description="Hi, I'm Ryan and I'm a web developer working in Philadelphia. This is my
    personal site where I post about webdev stuff and showcase some projects
    I've worked on."
    >
      <p>
        Hi, I'm Ryan and I'm a web developer working in Philadelphia. This is my
        personal site where I post about webdev stuff and showcase some projects
        I've worked on.
      </p>
      <PostList posts={posts} heading={<h2>Latest Posts</h2>} />
      <ProjectList projects={projects} heading={<h2>Projects</h2>} />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const postQuery = `*[_type == "post"][0..3]`;
  const posts = await client.fetch(postQuery);
  const projectQuery = `*[_type == "project"][0..4]`;
  const projects = await client.fetch(projectQuery);
  return {
    props: {
      posts,
      projects,
    },
    revalidate: 1,
  };
};

export default Index;
