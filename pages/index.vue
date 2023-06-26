<template>
  <Title>
    Hazadus.ru
  </Title>

  <section>
    <h1 class="text-5xl font-bold mt-10">
      Hello, I'm 🐻 Hazadus!
    </h1>
    <p class="text-base text-gray-900 p-2 italic">
      Software developer in heart.
    </p>
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-4">
      My favorite technologies
    </h2>

    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2">
        <h3 class="text-2xl font-semibold mt-4">
          Backend
        </h3>
        <ul>
          <li>
            Python
          </li>
          <li>
            Rust
          </li>
          <li>
            Docker
          </li>
        </ul>
      </div>
      <div class="md:w-1/2">
        <h3 class="text-2xl font-semibold mt-4">
          Frontend
        </h3>
        <ul>
          <li>
            Vue 3
          </li>
          <li>
            Nuxt
          </li>
          <li>
            TypeScript
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <h2 class="text-3xl font-bold mt-8">
      Latest Blog Posts
    </h2>

    <PostList :limit="3" />
  </section>
</template>