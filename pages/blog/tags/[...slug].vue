<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug[0]
</script>

<template>
  <h1 class="text-5xl font-bold mt-10">
    Все посты с меткой &laquo;{{ slug }}&raquo;
  </h1>

  <PostList :filterByTag="slug" />
</template>