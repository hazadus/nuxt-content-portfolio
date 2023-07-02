import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  // Fetch all blog posts
  const blogPosts = await serverQueryContent(event)
    .where({ _partial: false })
    .where({ published: true })
    .find();

  const sitemap = new SitemapStream({
    hostname: "https://hazadus.ru",
  });

  for (const doc of blogPosts) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly",
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
