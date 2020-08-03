<template>
  <la-container class="section1">
    <div class="section1__content">
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
  </la-container>
</template>

<style lang="scss">
.section1 {
  background: #eee;

  &__content {
    padding: 40px;
  }
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Section1',
})
</script>
