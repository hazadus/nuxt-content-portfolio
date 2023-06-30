export async function useViewCount(pageId: string) {
  const { data: viewCount } = await useFetch(`/api/viewCount?pageId=${pageId}`);
  return viewCount;
}
