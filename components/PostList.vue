<script setup lang="ts">
import type { BlogPost } from "@/types";

const props = defineProps({
  limit: {
    type: Number,
    default: 0,
    required: false,
  },
  filterByTag: {
    type: String,
    default: "",
    required: false,
  },
});

const { data: posts } = await useAsyncData("posts", () => {
  let query = queryContent<BlogPost>("/blog")
    .sort({ date: -1 })
    .where({ published: true });

  if (props.limit) {
    query = query.limit(props.limit);
  }

  if (props.filterByTag) {
    query = query.where({ tags: { $in: [props.filterByTag,] }, });
  }

  return query.find();
});
</script>

<template>
  <section class="grid md:grid-cols-3 mt-8 mb-8 gap-10">
    <PostCard v-for="post in posts" :key="`post-${post._id}`" :post="post" />
  </section>
</template>