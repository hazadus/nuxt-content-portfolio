<script setup lang="ts">
import { Breadcrumb } from "@/types";

const breadcrumbs: Breadcrumb[] = [
  {
    title: "About this site",
    url: null,
  },
];
</script>

<template>
  <Title>
    About | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <section>
    <h1 class="text-5xl font-bold mt-10">
      About this site
    </h1>
    <p class="text-base text-gray-900 p-2 italic">
      How it works and what it is for...
    </p>
  </section>
</template>