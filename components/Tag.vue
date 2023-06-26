<script setup lang="ts">
import { useTagsPageUrl } from "@/urls";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "small",
    required: false,
  },
});

const anchorClasses = props.size == "large" ? "inline-block bg-indigo-200 rounded px-2 last:mr-0 mr-2 mb-2" : "text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-indigo-700 uppercase last:mr-0 mr-4 mb-2";
</script>

<template>
  <a :href="useTagsPageUrl(props.title)" :class="anchorClasses">
    <Icon name="mdi:tag" /> {{ props.title }}
  </a>
</template>