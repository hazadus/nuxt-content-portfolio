<script setup lang="ts">
import { useTagsPageUrl } from "@/urls";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <a :href="useTagsPageUrl(props.title)"
    class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-indigo-700 uppercase last:mr-0 mr-4">
    <Icon name="mdi:tag" /> {{ props.title }}
  </a>
</template>