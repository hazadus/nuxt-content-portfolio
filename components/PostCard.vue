<script setup lang="ts">
import type { BlogPost } from "@/types";

defineProps({
  post: {
    type: Object as PropType<BlogPost>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-80 flex flex-col">
    <NuxtLink :to="post._path">
      <img
        :src="`/images/blog/${post.cover}`"
        :alt="post.title"
        class="w-full h-48 object-cover"
      />
    </NuxtLink>
    <div class="p-6 grow flex flex-col">
      <NuxtLink
        class="flex-none hover:underline"
        :to="post._path"
      >
        <h2 class="text-xl font-bold mb-2">
          {{ post.title }}
        </h2>
      </NuxtLink>
      <div class="flex flex-col grow">
        <div class="text-gray-700 mb-4 grow">
          {{ post.description }}
        </div>
        <div class="flex-none">
          <Tag
            v-for="tag in post.tags"
            :key="`tag-${tag}`"
            :title="tag"
            size="large"
          />
        </div>
      </div>
    </div>
  </div>
</template>
