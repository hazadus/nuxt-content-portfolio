import { serverQueryContent } from "#content/server";
import RSS from "rss";

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: "Блог Александра Голдовского",
    site_url: "https://hazadus.ru",
    feed_url: `https://hazadus.ru/rss.xml`,
  });

  const blogPosts = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({ _partial: false })
    .where({ published: true })
    .find();

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title,
      url: `https://hazadus.ru${doc._path}`,
      date: doc.date,
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.node.res.setHeader("content-type", "text/xml");
  event.node.res.end(feedString);
});
