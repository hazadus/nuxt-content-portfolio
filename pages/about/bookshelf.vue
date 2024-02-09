<script setup lang="ts">
import type { Book, Breadcrumb } from "@/types";

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

const booksData = await queryContent<{ books: Array<Book> }>("/books").find();
const books = booksData[0].books;
const booksReading = computed(() => books.filter((item) => item.status == "reading"));
const booksRead = computed(() => books.filter((item) => item.status == "read"));
const booksPlanned = computed(() => books.filter((item) => item.status == "planned"));
</script>

<template>
  <Title> {{ pageTitle }} | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Книжная полка</h1>

  <p class="text-base text-gray-900 p-4">
    Будучи большим любителем технической литературы, как правило я читаю несколько книг одновременно. По
    возможности, предпочитаю бумажные издания, но при отсутствии твердой копии читаю PDFы. Всегда делаю много
    заметок, а в последнее время стараюсь подводить итоги прочитанного. В этом разделе я веду учёт
    прочитанного, а также свой бэклог - это мотивирует читать ещё больше, и качественнее!
  </p>

  <section class="mb-20">
    <h2 class="text-2xl font-semibold">
      Читаю <span class="text-gray-500">{{ booksReading.length }}</span>
    </h2>
    <BookCard
      v-for="book in booksReading"
      :key="`book-id-${book.id}`"
      :book="book"
      class="mb-2"
    />
  </section>

  <section class="mb-20">
    <h2 class="text-2xl font-semibold">
      Планирую прочитать <span class="text-gray-500">{{ booksPlanned.length }}</span>
    </h2>
    <BookCard
      v-for="book in booksPlanned"
      :key="`book-id-${book.id}`"
      :book="book"
      class="mb-2"
    />
  </section>

  <section class="mb-4">
    <h2 class="text-2xl font-semibold">
      Прочитано <span class="text-gray-500">{{ booksRead.length }}</span>
    </h2>
    <BookCard
      v-for="book in booksRead"
      :key="`book-id-${book.id}`"
      :book="book"
      class="mb-2"
    />
  </section>
</template>
