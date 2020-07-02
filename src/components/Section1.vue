<template>
  <container
    class="section"
    image="https://via.placeholder.com/1280x620/FFDDDD.jpg"
    image-sp="https://via.placeholder.com/750x800/FFDDDD.jpg"
    image-alt="sample image"
  >
    <div class="ma-10">
      <h2 class="heading-medium my-2">セクション1</h2>
      <p class="primary-text text-large">primary color</p>
      <p class="secondary-text text-large">secondary color</p>
      <p class="success-text text-large">success color</p>
      <p class="error-text text-large">error color</p>
      <p class="warning-text text-large">warning color</p>
      <p class="black-text text-large">black color</p>
      <p class="white-text text-large">white color</p>
      <p class="grey-lighter-text text-large">grey-lighter color</p>
      <p class="grey-light-text text-large">grey-light color</p>
      <p class="grey-text text-large">grey color</p>
      <p class="grey-dark-text text-large">grey-dark color</p>
      <p class="grey-darker-text text-large">grey-darker color</p>
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
  name: 'Section1',
  components: {
    Container,
  },
}
</script>
