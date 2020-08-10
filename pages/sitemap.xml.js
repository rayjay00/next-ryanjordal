import client from "../client";

const createSitemap = (posts) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${`https://ryanjordal.me/`}</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>${`https://ryanjordal.me/posts`}</loc>
        <changefreq>weekly</changefreq>
    </url>
    <url>
        <loc>${`https://ryanjordal.me/projects`}</loc>
        <changefreq>monthly</changefreq>
    </url>
        ${posts
          .map((post) => {
            return `
                    <url>
                        <loc>${`https://ryanjordal.me/post/${post.slug.current}/`}</loc>
                        <lastmod>${post["_updatedAt"].split("T")[0]}</lastmod>
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

export async function getServerSideProps({ res }) {
  const posts = await client.fetch(
    `
    *[_type == "post"]
  `
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(posts));
  res.end();
  return { props: {} };
}
