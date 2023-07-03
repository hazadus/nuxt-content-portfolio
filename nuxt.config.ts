// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxtjs/apollo",
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
  },
  app: {
    head: {
      script: [
        {
          src: "http://hazadus.ru:3000/script.js",
          async: true,
          "data-website-id": "70e071a0-0e00-42c6-a658-06988050d5c8",
        },
      ],
    },
  },
  nitro: {
    storage: {
      // Reference: https://nuxt.com/docs/guide/directory-structure/server#example-using-redis
      redis: {
        driver: "redis",
        /* redis connector options */
        host: "redis", // Redis host
        port: 6379, // Redis port
        db: 0, // Defaults to 0
      },
    },
  },
  build: {
    // References: https://github.com/nuxt/nuxt/discussions/21533
    // https://v2.nuxt.com/docs/configuration-glossary/configuration-build/#transpile
    transpile: ["tslib"],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "nord",
      preload: [
        "python",
        "ts",
        "js",
        "css",
        "json",
        "bash",
        "vue",
        "vue-html",
        "html",
        "sql",
      ],
    },
  },
  apollo: {
    clients: {
      default: {
        tokenName: "github-token",
        httpEndpoint: "https://api.github.com/graphql",
      },
    },
  },
});
