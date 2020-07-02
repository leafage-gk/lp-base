<template>
  <container
    class="first-view"
    image="https://via.placeholder.com/1280x620/DDDDFF.jpg"
    image-sp="https://via.placeholder.com/750x620/DDDDFF.jpg"
    image-alt="first view"
    fluid
  >
    <div class="absolute center">
      <p class="heading-x-large">ファーストビュー</p>
      <!-- 画像のsrcは"@/assets/xxxx.jpg" -->
      <img src="@/assets/vue.png" alt="vue-logo" class="vue-logo" />
    </div>
  </container>
</template>

<style lang="scss" scoped>
.first-view {
  background: grey;
  .center {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  @include breakpoint-sp {
    .center {
      flex-direction: column;
    }
  }
}
</style>

<script>
import Container from './Container.vue'

export default {
  name: 'FirstView',
  components: {
    Container,
  },
}
</script>
