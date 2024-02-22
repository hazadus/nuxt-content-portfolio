<script setup lang="ts">
import type { Book } from "@/types";

defineProps({
  book: {
    type: Object as PropType<Book>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden p-4 grid md:grid-cols-12">
    <div class="mr-auto md:col-span-9">
      <div>
        <a
          class="text-xl font-semibold hover:underline"
          :href="book.url"
          >{{ book.title }}</a
        >
      </div>
      <div>
        {{ book.author }} &middot; <span class="text-gray-500">{{ book.publisher }}</span> &middot;
        <span class="text-gray-500">{{ book.year }}</span>
      </div>
      <div>
        <span
          v-for="tag in book.tags"
          :key="`book-tag-id-${tag}-${book.id}`"
          class="px-2 mr-1 text-sm rounded-lg border-1 bg-gray-200"
          >{{ tag }}</span
        >
      </div>
      <div
        v-if="book.description"
        class="pt-2 text-sm"
      >
        {{ book.description }}
      </div>
    </div>

    <div class="hidden md:mt-0 md:col-span-3 md:flex justify-center">
      <a :href="book.url">
        <img
          :src="book.coverUrl"
          :alt="`${book.title} cover`"
          class="w-40 mx-auto"
        />
      </a>
    </div>
  </div>
</template>
