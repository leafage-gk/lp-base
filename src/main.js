import '@leafage-gk/lp-utils/dist/lp-utils.css'
import '@leafage-gk/la-header/dist/la-header.css'
import '@/scss/base.scss'

import LpUtils, { createPage } from '@leafage-gk/lp-utils'
import Vue from 'vue'
import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(LpUtils)

import sections from './sections/main'

createPage({
  head: {
    title: {
      inner: 'ガイドライン',
    },
    meta: [
      { name: 'description', content: 'ガイドライン' },
      // Twitter
      // { name: 'twitter:title', content: 'Content Title' },
      // with shorthand
      // { n: 'twitter:description', c: 'Content description less than 200 characters'},
      // ...
      // Google+ / Schema.org
      // { itemprop: 'name', content: 'Content Title' },
      // { itemprop: 'description', content: 'Content Title' },
      // ...
      // Facebook / Open Graph
      // { property: 'fb:app_id', content: '123456789' },
      // { property: 'og:title', content: 'Content Title' },
      // with shorthand
      // { p: 'og:image', c: 'https://example.com/image.jpg' },
    ],
    // link: [
    //   { rel: 'canonical', href: 'http://example.com/#!/contact/', id: 'canonical' },
    //   { rel: 'author', href: 'author', undo: false }, // undo property - not to remove the element
    //   { rel: 'icon', href: require('./path/to/icon-16.png'), sizes: '16x16', type: 'image/png' },
    //   // with shorthand
    //   { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' },
    // ],
    // script: [
    //   { type: 'text/javascript', src: 'cdn/to/script.js', async: true, body: true}, // Insert in body
    //   // with shorthand
    //   { t: 'application/ld+json', i: '{ "@context": "http://schema.org" }' },
    // ],
  },
  sections,
})
