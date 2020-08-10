import React from "react";
import client from "../client";

const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

const createSitemap = (posts) => {
  console.log("posts", posts[0].slug.current);
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${`https://ryanjordal.me/posts`}</loc>
    </url>
    <url>
        <loc>${`https://ryanjordal.me/projects`}</loc>
    </url>
        ${posts
          .map((post) => {
            return `
                    <url>
                        <loc>${`https://ryanjordal.me/post/${post.slug.current}/`}</loc>
                    </url>
                `;
          })
          .join("")}
    </urlset>`;
};

const Sitemap = () => {
  return null;
};

export default Sitemap;

export async function getStaticProps({ res }) {
  const posts = await client.fetch(
    `
    *[_type == "post"]
  `
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(posts));
  res.end();
  return {};
}
