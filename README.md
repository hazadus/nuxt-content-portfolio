# nuxt-content-portfolio

Nuxt 3 + Content module + Tailwind CSS + GraphQL + Redis personal web site.

## Configuration

**NB**: 2 Gb RAM needed to build and run the container.

Required environment variables to run the project:

- `GITHUB_TOKEN` - your GitHub Personal access tokens (get it here: https://github.com/settings/tokens).
- `USE_REDIS` - set to `True` when you run the app alongside Redis instance. Redis is used by `./server/api/viewCount.get.ts` endpoint to save page view counters.

## References

- Tutorial series: https://www.youtube.com/watch?v=b6b2yZZNG6Y
- [TailwindUI navbars](https://tailwindui.com/components/application-ui/navigation/navbars)
- [Tailwind Starter Kit](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation)
- [GitHub GraphQL API Explorer](https://docs.github.com/en/graphql/overview/explorer)

## Modules / Libraries used:

- `@nuxtjs/tailwindcss`:

```bash
npm install --save-dev @nuxtjs/tailwindcss
npm install @headlessui/vue
npm install @heroicons/vue
```

- '@tailwindcss/typography' https://tailwindcss.com/docs/typography-plugin

- `nuxt-icon`

- '@nuxt/content' https://content.nuxtjs.org/get-started/

- '@nuxtjs/apollo' https://apollo.nuxtjs.org

## Built on top of Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
