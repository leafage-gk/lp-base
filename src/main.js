require('@/scss/base.scss')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      breakpoints: {
        pc: true,
        sp: false,
        tablet: false,
        notPc: false,
      },
    }
  },
  methods: {
    handleResize() {
      this.breakpoints.pc = window.innerWidth > 1280
      this.breakpoints.tablet = window.innerWidth <= 1280 && window.innerWidth > 750
      this.breakpoints.sp = window.innerWidth <= 750
      this.breakpoints.notPc = window.innerWidth <= 1280
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  render: h => h(App),
}).$mount('#app')
