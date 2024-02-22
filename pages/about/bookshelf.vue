<script setup lang="ts">
import type { Book, Breadcrumb } from "@/types";

const pageTitle = "Читаю";

useSeoMeta({
  description: "Моя книжная полка.",
  ogTitle: pageTitle,
  ogDescription: "Моя книжная полка.",
  ogUrl: "https://hazadus.ru/books/",
  ogImage: "/images/ogImage.jpg",
  twitterTitle: pageTitle,
  twitterDescription: "Моя книжная полка.",
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
const booksReading = books.filter((item) => item.status == "reading");
const booksRead = books.filter((item) => item.status == "read");
const booksPlanned = books.filter((item) => item.status == "planned");

const tags: string[] = [];
books.forEach((book) =>
  book.tags.forEach((tag) => {
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  }),
);
const selectedTags: Ref<string[]> = ref([]);

const isFilterActive = computed(() => selectedTags.value.length != 0);
const resetFilter = () => {
  selectedTags.value = [];
};

const hasAllTags = (bookTags: string[], checkHasTags: string[]) => {
  return checkHasTags.length == bookTags.filter((item) => checkHasTags.includes(item)).length;
};

const filteredBooks = computed(() => {
  return books.filter((book) => hasAllTags(book.tags, selectedTags.value));
});

/**
 * Возвращает список тегов, которые есть у книг, имеющих ВСЕ выбранные теги.
 */
const filteredTags = computed(() => {
  if (selectedTags.value.length != 0) {
    const remainingTags: string[] = [];
    filteredBooks.value.forEach((book) =>
      book.tags.forEach((tag) => {
        if (!remainingTags.includes(tag)) {
          remainingTags.push(tag);
        }
      }),
    );
    return remainingTags;
  } else {
    return tags;
  }
});
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

  <section class="mb-20 bg-white rounded-lg shadow-md p-4">
    <h2 class="text-2xl font-semibold mb-2">Фильтр по темам</h2>
    <div class="flex flex-wrap">
      <span
        v-for="tag in filteredTags"
        :key="`filter-tag-id-${tag}`"
        class="px-2 py-0 mb-1 mr-1 text-sm rounded-lg cursor-pointer"
        @click="
          () => {
            console.log(tag);
            if (selectedTags.includes(tag)) {
              selectedTags = selectedTags.filter((item) => item != tag);
            } else {
              selectedTags.push(tag);
            }
          }
        "
        :class="{
          [`bg-gray-200`]: !selectedTags.includes(tag),
          [`bg-purple-200`]: selectedTags.includes(tag),
        }"
        >{{ tag }}</span
      >
    </div>
    <div
      class="mt-4"
      v-if="isFilterActive"
    >
      <span
        class="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
        @click="resetFilter"
        >Сбросить фильтр</span
      >
    </div>
  </section>

  <section v-if="isFilterActive">
    <h2 class="text-2xl font-semibold">
      Подходящие книги <span class="text-gray-500">{{ filteredBooks.length }}</span>
    </h2>
    <BookCard
      v-for="book in filteredBooks"
      :key="`filtered-book-id-${book.id}`"
      :book="book"
      class="mb-2"
    />
  </section>

  <section
    v-if="!isFilterActive"
    class="mb-20"
  >
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

  <section
    v-if="!isFilterActive"
    class="mb-20"
  >
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

  <section
    v-if="!isFilterActive"
    class="mb-4"
  >
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
