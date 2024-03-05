// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '../assets/css/mycss.css'
  ],
  modules: [
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@ant-design-vue/nuxt',
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
    secretEnv: process.env.SECRET_ENV,
    public: {
      publicEnv: process.env.PUBLIC_ENV,
    }
  }
})
