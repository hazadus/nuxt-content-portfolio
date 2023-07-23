<script setup lang="ts">
import { Breadcrumb, BlogPost } from "@/types";

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Dashboard",
    url: null,
  },
];

const { data: postDrafts } = await useAsyncData("posts", () => {
  let query = queryContent<BlogPost>("/blog")
    .sort({ date: -1 })
    .where({ published: false });

  return query.find();
});

const { data: allRepos, error: reposError } = await fetchAllRepositoriesInfo();
const { data: topIssues, error: issuesError } = await fetchLatestOpenIssuesInfo();
</script>

<template>
  <Title>
    Dashboard | Hazadus.ru
  </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8 mb-8">
    Dashboard 🚀
  </h1>

  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
    <div class="p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">Post drafts</h2>
      <ul class="text-sm">
        <li v-for="(post, i) in postDrafts" :key="`post-draft-${i}`">
          <a :href="post._path" class="hover:underline">
            {{ post.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">Links</h2>
      <ul class="text-sm">
        <li>
          <a href="https://music.yandex.ru/home" class="hover:underline">
            Яндекс Музыка
          </a>
        </li>
        <li>
          <a href="https://webmaster.yandex.ru/site/https:hazadus.ru:443/dashboard/" class="hover:underline">
            Яндекс Вебмастер
          </a>
        </li>
        <li>
          <a href="https://mail.timeweb.com/mailbox/directory/27758" class="hover:underline">
            Timeweb Mail
          </a>
        </li>
      </ul>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">Google stuff</h2>
      <ul class="text-sm">
        <li>
          <Icon name="logos:google-gmail" class="mr-1" />
          <a href="https://www.youtube.com/feed/subscriptions" class="hover:underline">Gmail
          </a>
        </li>
        <li>
          <Icon name="logos:youtube-icon" class="mr-1" />
          <a href="https://www.youtube.com/feed/subscriptions" class="hover:underline">YouTube Subscriptions
          </a>
        </li>
        <li>
          <Icon name="logos:google-icon" class="mr-1" />
          <a href="https://search.google.com/search-console?resource_id=sc-domain%3Ahazadus.ru&hl=ru"
            class="hover:underline">Google Search Console
          </a>
        </li>
      </ul>
    </div>
    <div class="p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">My tools</h2>
      <ul class="text-sm">
        <li>
          <a href="https://bookmarks.hazadus.ru/add/" class="hover:underline">
            Add bookmark
          </a>
        </li>
        <li>
          <a href="https://bookmarks.hazadus.ru/" class="hover:underline">
            Bookmarks
          </a>
        </li>
        <li>
          <a href="https://stats.hazadus.ru/" class="hover:underline">
            Stats
          </a>
        </li>
      </ul>
    </div>
  </section>

  <AlertBox v-if="reposError || issuesError" alertType="warning" class="mt-4">
    <p>Произошла ошибка при обращении к GitHub API! Пожалуйста, обновите страницу.</p>
    <p v-if="reposError">
      Repositories &mdash; {{ reposError }}
    </p>
    <p v-if="issuesError">
      Issues &mdash; {{ issuesError }}
    </p>
  </AlertBox>

  <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div v-if="topIssues" class="p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">GitHub Issues</h2>
      <ul class="text-sm">
        <!-- @vue-ignore -->
        <li v-for="issue in topIssues.viewer.issues.nodes" :key="`issue-id-${issue.id}`">
          <Icon name="octicon:issue-opened-16" class="mr-1" /><a :href="issue.url" class="hover:underline">
            {{ issue.title }}
          </a>
          <span class="text-gray-300">
            &nbsp;&middot; <a :href="issue.repository.url" class="hover:underline">{{ issue.repository.name }}</a>
          </span>
        </li>
      </ul>
    </div>

    <div v-if="allRepos" class="p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <h2 class="mb-6 text-sm font-semibold text-gray-800 uppercase">GitHub Repos</h2>
      <ul class="text-sm">
        <!-- @vue-ignore -->
        <li v-for="repo in allRepos.viewer.repositories.nodes" :key="`repo-${repo.id}`">
          <Icon name="mdi:source-repository" class="mr-1" /><a :href="repo.url" class="hover:underline">
            {{ repo.name }}
          </a>
          <span class="text-gray-300">&nbsp;&middot; {{ formatDateTime(repo.pushedAt) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>