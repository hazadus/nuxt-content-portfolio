import type { MastoToot } from "@/types";
import { fetchAllToots } from "@/utils/mastodonApi";
import { defineStore } from "pinia";


export const useTootStore = defineStore("toot-store", {
  state: () => ({
    toots: [] as MastoToot[],
  }),
  actions: {
    async initializeStore() {
      if (!this.toots.length) {
        const cachedDate = localStorage.getItem("hazadus-toots-cached-date");
        const tootsInfo = localStorage.getItem("hazadus-toots");

        if (cachedDate && tootsInfo) {
          // @ts-ignore
          const cacheAge = new Date() - new Date(cachedDate);

          // Cache toots for 1 hr
          if (cacheAge < 1 * 60 * 60 * 1000) {
            this.toots = JSON.parse(tootsInfo);
            return;
          }
        }

        this.toots = await fetchAllToots();
        localStorage.setItem("hazadus-toots", JSON.stringify(this.toots));
        localStorage.setItem("hazadus-toots-cached-date", new Date().toJSON());
      }
    }
  }
});