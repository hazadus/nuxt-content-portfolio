<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span class="inline-block text-sm bg-indigo-200 rounded max-h-8 px-3 py-1.5 mr-2 mb-2 cursor-default">
    <TechIcon
      :title="title"
      class="text-xl mr-1"
    />
    {{ title }}
  </span>
</template>
