<script setup lang="ts">
import { MastoToot } from "@/types";

defineProps({
  toot: {
    type: Object as PropType<MastoToot>,
    required: true,
  },
});
</script>

<template>
  <div class="mb-2 px-4 py-4 rounded-lg shadow-lg sm:max-w-[580px]">
    <TootContent
      v-if="toot.content"
      :toot="toot"
    />

    <template v-if="toot.reblog">
      <div class="mb-4 text-gray-400">
        <Icon
          name="mdi:tumblr-reblog"
          class="mr-1"
        />
        <a
          :href="toot.account.url"
          class="underline"
          >{{ toot.account.display_name }}</a
        >
        зарепостил:
      </div>

      <TootContent :toot="toot.reblog" />
    </template>
  </div>
</template>
