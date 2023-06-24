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
