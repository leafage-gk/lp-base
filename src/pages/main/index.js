import '@leafage-gk/lp-utils/dist/lp-utils.css'
import '@leafage-gk/la-header/dist/la-header.css'
import '@/scss/base.scss'

import LpUtils, { createPage } from '@leafage-gk/lp-utils'
import Vue from 'vue'
import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(LpUtils)

import App from './App.vue'

createPage(App)
