export default defineEventHandler(async (event) => {
  //
  // Increase and get view count from Redis for page with `pageId`.
  // Set `USE_REDIS` env var to True when you run the app alongside Redis instance.
  // Otherwise, this endpoint will always return 0 to work around connection errors when there's
  // no Redis instance running.
  //
  // Usage:
  //
  // const { data: viewCount } = await useFetch("/api/viewCount?pageId=about");
  //
  const query = getQuery(event);
  const pageId: string = query.pageId as string;
  const redisKey: string = `viewCount:${pageId}`;
  let viewCount = 1;

  if (process.env.USE_REDIS) {
    const redis = useStorage("redis");
    const data = await redis.getItem(redisKey);

    if (data) viewCount = Number(data.toString()) + 1;
    await redis.setItem(redisKey, viewCount);

    return viewCount;
  } else {
    return 0;
  }
});
