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
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-80">
    <a :href="post._path">
      <img :src="`/images/blog/${post.cover}`" :alt="post.title" class="w-full h-48 object-cover" />
    </a>
    <div class="p-6">
      <a :href="post._path" class="hover:underline">
        <h2 class="text-xl font-bold mb-2">
          {{ post.title }}
        </h2>
      </a>
      <p class="text-gray-700 mb-4">
        {{ post.description }}
      </p>
      <div>
        <Tag v-for="tag in post.tags" :key="`tag-${tag}`" :title="tag" size="large" />
      </div>
    </div>
  </div>
</template>