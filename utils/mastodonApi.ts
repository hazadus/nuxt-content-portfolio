import type { MastoToot } from "@/types";

/**
 * Fetch 20 latest toots from my Mastodon feed.
 * 
 * @returns array of `MastoToot` objects.
 */
export async function fetchAllToots() {
  const endPoint = `https://fosstodon.org/api/v1/accounts/109570713393752841/statuses`;

  // Reference: https://nuxt.com/docs/api/utils/dollarfetch
  return await $fetch<MastoToot[]>(endPoint, {
    method: "GET",
  });
}
