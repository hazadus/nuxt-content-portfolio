<script setup lang="ts">
import { Breadcrumb } from "@/types";

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Welcome to Hazadus.ru!",
    url: null,
  },
];
</script>

<template>
  <Title>
    Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-5xl font-bold mt-10">
    Welcome to Hazadus.ru!
  </h1>

  <section>
    <h2 class="text-3xl font-bold mt-10">
      Latest Blog Posts
    </h2>

    <PostList :limit="3" />
  </section>
</template>