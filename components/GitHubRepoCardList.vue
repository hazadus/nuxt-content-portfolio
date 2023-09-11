<script setup lang="ts">
interface IRepository {
  id: number;
}

defineProps({
  repositories: {
    type: Array<IRepository>,
    required: true,
  },
});
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <GitHubRepoCard
      v-for="repo in repositories"
      :key="`repo-${repo.id}`"
      :project="repo"
    />
  </section>
</template>
