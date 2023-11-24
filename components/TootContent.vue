<script setup lang="ts">
import { MastoToot } from "@/types";
import { useTimeAgo } from "@vueuse/core";

const props = defineProps({
  toot: {
    type: Object as PropType<MastoToot>,
    required: true,
  },
});

const timeAgo = useTimeAgo(new Date(props.toot.created_at));
</script>

<template>
  <div class="flex flex-col">
    <!-- Avatar, author name, and time of creation -->
    <div class="flex mb-2 w-100">
      <img
        :src="toot.account.avatar"
        class="w-12 rounded-md mr-2"
      />
      <div class="grow">
        <a
          :href="toot.account.url"
          class="font-semibold"
          target="_blank"
          >{{ toot.account.display_name }}</a
        >
      </div>
      <div class="text-sm text-gray-400 underline">
        <a
          :href="toot.url"
          target="_blank"
          >{{ timeAgo }}</a
        >
      </div>
    </div>

    <!-- Toot content -->
    <div
      v-html="toot.content"
      class="prose"
    ></div>

    <!-- Media attachments, if any -->
    <!-- Show first image in "full"-->
    <div
      v-if="toot.media_attachments.length"
      class="flex justify-center mt-2"
    >
      <a
        :href="toot.media_attachments[0].url"
        target="_blank"
      >
        <img :src="toot.media_attachments[0].preview_url"
      /></a>
    </div>

    <!-- Show the rest of the images in two-column view -->
    <div
      v-if="toot.media_attachments.length > 1"
      class="columns-2"
    >
      <a
        v-for="image in toot.media_attachments.slice(1)"
        :key="image.id"
        :href="image.url"
        target="_blank"
      >
        <img
          :src="image.preview_url"
          class="flex w-full"
      /></a>
    </div>

    <!-- Preview card, if any -->
    <div
      v-if="toot.card"
      class="flex flex-col border border-gray-300 rounded-lg mt-4"
    >
      <img
        v-if="toot.card.image"
        :src="toot.card.image"
        class="mb-2 rounded-tl-lg rounded-tr-lg"
      />
      <div
        v-if="toot.card.provider_name"
        class="mb-1 px-2 text-gray-400"
      >
        {{ toot.card.provider_name }}
      </div>
      <div class="text-xl font-semibold mb-2 px-2 underline">
        <a
          :href="toot.card.url"
          target="_blank"
          >{{ toot.card.title }}</a
        >
      </div>
      <div class="px-2 mb-2 text-sm text-gray-400">{{ toot.card.description }}</div>
    </div>

    <!-- Bottom bar with answers, boosts, favorites counts -->
    <div class="pt-4 flex items-center text-gray-500">
      <Icon
        name="octicon:reply"
        class="mr-1"
      />
      <a
        class="mr-2"
        :href="toot.url"
        target="_blank"
        >{{ toot.replies_count }}</a
      >
      <Icon
        name="zondicons:repost"
        class="mr-1"
      />
      <a
        class="mr-2"
        :href="toot.url"
        target="_blank"
        >{{ toot.reblogs_count }}</a
      >
      <Icon
        name="material-symbols:star-rounded"
        class="mr-1"
      />
      <a
        :href="toot.url"
        target="_blank"
        >{{ toot.favourites_count }}</a
      >
    </div>
  </div>
</template>
