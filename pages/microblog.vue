<script setup lang="ts">
import { Breadcrumb } from "@/types";
import { useTootStore } from "~/store/tootStore";

const breadcrumbs: Breadcrumb[] = [
  {
    title: "Микроблог",
    url: null,
  },
];

const tootStore = useTootStore();

onMounted(() => {
  tootStore.initializeStore();
});
</script>

<template>
  <Title> Микроблог | Hazadus.ru </Title>

  <Breadcrumbs :breadcrumbs="breadcrumbs" />

  <h1 class="text-4xl font-bold mt-8">Микроблог <Icon name="logos:mastodon-icon" /></h1>

  <p class="text-base text-gray-900 p-4">
    В этом разделе подгружаются свежие статусы из моей ленты на Мастодоне. Это любопытная децентрализованная
    социальная сеть, в которой нет рекламы и навязанного контента, зато присутствует большое сообщество
    разработчиков. Если вы ничего не слышали о Мастодоне ранее, рекомендую почитать пост
    <a
      href="https://axbom.com/mastodon-tips/"
      class="underline"
      >10 quick Mastodon tips</a
    >. Для создания аккаунта, можно выспользоваться моим
    <a
      href="https://fosstodon.org/invite/Wg3cdmzP"
      class="underline"
      >инвайтом</a
    >.
  </p>

  <section
    v-if="tootStore.toots.length"
    class="mb-8"
  >
    <TootCard
      v-for="toot in tootStore.toots"
      :toot="toot"
      :key="toot.id"
    />

    <div class="mt-8 flex flex-col">
      <span class="block text-center">Ого, вы долистали ленту до конца 😳 ?..</span>
      <span class="block text-center">Это были только двадцать последних постов!</span>
      <span class="block text-center"
        >Просмотреть всё целиком вы можете на
        <a
          href="https://fosstodon.org/@hazadus"
          class="underline"
          >https://fosstodon.org/@hazadus</a
        >.</span
      >
    </div>
  </section>
  <section
    v-else
    class="w-100 h-96 flex justify-center items-center"
  >
    <SpinnerIndicator />
  </section>
</template>
