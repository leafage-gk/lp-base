<template>
  <la-top-scroller class="top-scroller" />
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Additions',
})
</script>

<style lang="scss" scoped>
.top-scroller {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 50;
}
</style>
