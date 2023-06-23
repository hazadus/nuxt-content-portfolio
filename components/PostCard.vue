<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps({
  post: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
    <a :href="post._path">
      <img :src="`/images/blog/${post.cover}`" :alt="post.title" class="w-full h-48 object-cover" />
    </a>
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2">
        {{ post.title }}
      </h2>
      <p class="text-gray-700 mb-4">
        {{ post.description }}
      </p>
      <a :href="post._path"
        class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8">
        Read more
      </a>
    </div>
  </div>
</template>