# nuxt-content-portfolio

My personal web site, running at [https://hazadus.ru](https://hazadus.ru).

## Configuration

**NB**: 2 Gb RAM needed to build and run the container on VDS.

Required environment variables to run the project:

- `GITHUB_TOKEN` - your GitHub Personal access tokens (get it here: https://github.com/settings/tokens).
- `USE_REDIS` - set to `True` when you run the app alongside Redis instance. Redis is used by `./server/api/viewCount.get.ts` endpoint to save page view counters.

## Modules / Libraries used:

- `@nuxt/content` https://content.nuxtjs.org/get-started/
- `@nuxtjs/tailwindcss`
- `@tailwindcss/typography` https://tailwindcss.com/docs/typography-plugin
- `nuxt-icon`
- `@nuxtjs/apollo` https://apollo.nuxtjs.org
- `rss` https://www.npmjs.com/package/rss

## References

- [TailwindUI navbars](https://tailwindui.com/components/application-ui/navigation/navbars)
- [Tailwind Starter Kit](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation)
- [GitHub GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer)
- [Hybrid Rendering in Nuxt.js 3](https://vueschool.io/articles/vuejs-tutorials/hybrid-rendering-in-nuxt-js-3/)

### Issues

- [static target support for non-platform targets #603](https://github.com/unjs/nitro/issues/603): `"/": { swr: 300 }` does not work as expected.

## Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/55d1fd732b2bf8d5160a3699e1525378aa41885d.svg "Repobeats analytics image")
