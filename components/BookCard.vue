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
  <div class="bg-white rounded-lg shadow-md overflow-hidden p-4">
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
  </div>
</template>
