<template>
  <div id="app">
    <la-header />
    <first-view />
    <section1 />
    <section2 />
    <contact-form />
    <additions />
  </div>
</template>

<script>
import LaHeader from '@leafage-gk/la-header'
import Vue from 'vue'

import Additions from '@/components/sections/common/Additions.vue'

import ContactForm from './ContactForm.vue'
import FirstView from './FirstView.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'

export default Vue.extend({
  name: 'App',
  components: {
    LaHeader,
    Additions,
    ContactForm,
    FirstView,
    Section1,
    Section2,
  },
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
})
</script>
