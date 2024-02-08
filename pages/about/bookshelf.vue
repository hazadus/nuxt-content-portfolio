<script setup lang="ts">
import type { Breadcrumb } from "@/types";

interface Book {
  id: number;
  author: string;
  title: string;
  publisher: string;
  year: number;
  description: string | null;
  url: string;
  coverUrl: string;
  reviewUrl: string | null;
  tags: Array<string>;
  status: string /* TODO: refactor to dedicated type. */;
  dateFinished: Date | null;
}

const pageTitle = "Читаю";

useSeoMeta({
  description: "Книги, которые мне интересны.",
  ogTitle: pageTitle,
  ogDescription: "Книги, которые мне интересны.",
  ogUrl: "https://hazadus.ru/books/",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: pageTitle,
  twitterDescription: "Книги, которые мне интересны.",
  twitterCard: "summary",
  twitterImage: "/images/ogImage.jpg",
});

const breadcrumbs: Breadcrumb[] = [
  {
    title: "О себе",
    url: "/about/",
  },
  {
    title: pageTitle,
    url: null,
  },
];

const { books } = await queryContent<{ books: Array<Book> }>("/books").findOne();
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Книжная полка</h1>

  <p class="text-base text-gray-900 p-4">
    Техническая литература, которую я читаю или хочу прочитать:
    <a
      href="http://library.hazadus.ru/lists/3/details/"
      class="underline"
      >читаю</a
    >
    /
    <a
      href="http://library.hazadus.ru/lists/5/details/"
      class="underline"
      >хочу прочитать</a
    >
    /
    <a
      href="http://library.hazadus.ru/lists/2/details/"
      class="underline"
      >недавно прочитал</a
    >.
  </p>

  <section class="mb-2">
    <h2 class="text-2xl font-semibold">Читаю</h2>

    <!-- TODO: refactor to BookCard component -->
    <div
      v-for="book in books.filter((item) => item.status == 'reading')"
      :key="`book-id-${book.id}`"
    >
      <div>
        <a>{{ book.title }}</a>
      </div>
      <div>{{ book.author }} &middot; {{ book.publisher }} &middot; {{ book.year }}</div>
    </div>
  </section>

  <section class="mb-2">
    <h2 class="text-2xl font-semibold">Прочитано</h2>
  </section>

  <section class="mb-2">
    <h2 class="text-2xl font-semibold">Планирую прочитать</h2>
  </section>
</template>
