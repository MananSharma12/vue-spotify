// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@vee-validate/nuxt',
  ],
  plugins: [
    '~/plugins/vee-validate.ts'
  ],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  veeValidate: {
    autoImports: true,
  }
})