<template>
  <container
    class="section"
    image="https://via.placeholder.com/1280x620/DDFFDD.jpg"
    image-sp="https://via.placeholder.com/750x850/DDFFDD.jpg"
    image-alt="sample image"
  >
    <div class="ma-10">
      <h2 class="heading-medium my-2">セクション2</h2>
      <p class="text-small">テキスト小 text-small</p>
      <p class="text-medium">テキスト中 text-medium</p>
      <p class="text-large">テキスト大 text-large</p>
      <p class="text-x-large">テキスト大大 text-x-large</p>
      <p class="heading-small">ヘッディング小 heading-small</p>
      <p class="heading-medium">ヘッディング中 heading-medium</p>
      <p class="heading-large">ヘッディング大 heading-large</p>
      <p class="heading-x-large">ヘッディング大大 heading-x-large</p>
    </div>
  </container>
</template>

<style lang="scss" scoped>
.section {
  background: #EEE;
}
</style>

<script>
import Container from './Container.vue'

export default {
  name: 'Section2',
  components: {
    Container,
  },
}
</script>
