/**
 * Increase and return page views counter.
 * @param pageId unique ID of the page.
 * @returns number of views of page with `pageId`.
 */
export async function getViewCount(pageId: string) {
  const { data: viewCount } = await useFetch(`/api/viewCount?pageId=${pageId}`);
  return viewCount;
}
