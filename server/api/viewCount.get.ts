export default defineEventHandler(async (event) => {
  //
  // Increase and get view count from Redis for page with `pageId`.
  //
  // Usage:
  //
  // const { data: viewCount } = await useFetch("/api/viewCount?pageId=about");
  //
  const query = getQuery(event);
  const pageId: string = query.pageId as string;
  const redisKey: string = `viewCount:${pageId}`;
  let viewCount = 1;

  const redis = useStorage("redis");

  if (redis) {
    const data = await redis.getItem(redisKey);

    if (data) viewCount = Number(data.toString()) + 1;

    await redis.setItem(redisKey, viewCount);
  }

  return viewCount;
});
