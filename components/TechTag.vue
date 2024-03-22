<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="inline-block text-sm bg-indigo-200 rounded px-2 py-1 mr-2 mb-2 cursor-default">
    <TechIcon :title="title" />
    {{ title }}
  </span>
</template>
