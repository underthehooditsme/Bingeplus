/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'bingeplus',
    meta: [{ charset: 'utf-8' }]
  },
  loading: false,
  plugins: [
    { ssr: true, src: '@/plugins/icons.js' }

  ],
  buildModules: [

  ],
  modules: [

  ],
  script: [
    { hid: 'scokeio', src: 'https://cdn.socket.io/socket.io-3.0.1.min.js', defer: true }
  ]

}
