<script setup lang="ts">
const props = defineProps({
  limit: {
    type: Number,
    default: 0,
    required: false,
  },
});

const { data: posts } = await useAsyncData("posts", () => {
  if (!props.limit) {
    return queryContent("/blog")
      .sort({ date: 1 })
      .where({ published: true })
      .find();
  } else {
    return queryContent("/blog")
      .sort({ date: 1 })
      .where({ published: true })
      .limit(props.limit)
      .find();
  }
});
</script>

<template>
  <section class="grid md:grid-cols-3 mt-8 mb-8 gap-10">
    <PostCard v-for="post in posts" :key="`post-${post._id}`" :post="post" />
  </section>
</template>