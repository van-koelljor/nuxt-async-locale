const pkg = require('./package')

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  modules: [
    ['nuxt-i18n', {
      seo: false,
      locales: [
        {
          code: 'en',
          name: 'English'
        },
        {
          code: 'fr',
          name: 'Français'
        }],
      strategy: 'prefix',
      defaultLocale: 'en',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            welcome: 'Hello'
          },
          fr: {
            welcome: 'Bonjour'
          },
        }
      }
    }],
    '@nuxtjs/axios'
  ],

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      'axios'
    }
  }
}
