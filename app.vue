<script setup lang="ts">
import { useTootStore } from "~/store/tootStore";

const tootStore = useTootStore();

onMounted(() => {
  // Preload toots here to avoid waiting on Microblog and index page.
  tootStore.initializeStore();
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheNavBar />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>
