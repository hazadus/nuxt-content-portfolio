<script setup lang="ts">
import type { BlogPost } from "@/types";

type PostListType = "cards" | "simple";

const props = defineProps({
  limit: {
    type: Number,
    default: 0,
    required: false,
  },
  filterByTag: {
    type: String,
    default: "",
    required: false,
  },
  listType: {
    type: Object as PropType<PostListType>,
    default: "cards",
    required: true,
  },
  excludePath: {
    type: String,
    required: false,
  },
});

const { data: posts } = await useAsyncData("posts", () => {
  let query = queryContent<BlogPost>("/blog").sort({ date: -1 }).where({ published: true });

  if (props.limit) {
    query = query.limit(props.limit);
  }

  if (props.filterByTag) {
    query = query.where({ tags: { $in: [props.filterByTag] } });
  }

  if (props.excludePath) {
    query = query.where({ _path: { $ne: props.excludePath } });
  }

  return query.find();
});
</script>

<template>
  <section
    v-if="listType == 'cards'"
    class="grid md:grid-cols-2 xl:grid-cols-3 mt-8 mb-8 gap-10"
  >
    <PostCard
      v-for="post in posts"
      :key="`post-${post._id}`"
      :post="post"
    />
  </section>
  <section
    v-else
    class="mt-8 mb-16"
  >
    <h2 class="text-3xl font-bold">Читайте также</h2>

    <ul class="mt-4">
      <li
        v-for="post in posts"
        :key="`post-${post._id}`"
      >
        <NuxtLink
          :to="post._path"
          class="hover:underline"
        >
          {{ post.title }}</NuxtLink
        >
      </li>
    </ul>
  </section>
</template>
