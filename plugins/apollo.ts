export default defineNuxtPlugin((nuxtApp) => {
  const { githubToken } = useRuntimeConfig();

  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    // https://apollo.nuxtjs.org/recipes/authentication#auth-hook
    // `client` can be used to differentiate logic on a per client basis.

    // apply apollo client token
    token.value = githubToken;
  });
});
