<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="bg-teal-100 border-l-4 border-teal-500 rounded-l text-teal-900 px-4 py-3 shadow-md"
    role="alert"
  >
    <div class="flex items-center">
      <div class="ml-6">
        <p
          v-if="title.length"
          class="font-bold"
        >
          {{ title }}
        </p>
        <p class="text-base">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
