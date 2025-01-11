// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
