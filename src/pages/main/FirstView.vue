<template>
  <la-container class="first-view" fluid>
    <div class="first-view__content">
      <p class="heading-x-large">ファーストビュー</p>
      <!-- 画像のsrcは"@/assets/xxxx.jpg" -->
      <img src="@/assets/vue.png" alt="vue-logo" class="vue-logo" />
    </div>
  </la-container>
</template>

<style lang="scss" scoped>
.first-view {
  background: grey;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    color: white;
    @include breakpoint-sp {
      flex-direction: column;
    }
  }
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'FirstView',
})
</script>
