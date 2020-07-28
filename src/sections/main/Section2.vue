<template>
  <la-container class="section2">
    <div class="section2__content">
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
  </la-container>
</template>

<style lang="scss">
.section2 {
  background: #eee;

  &__content {
    padding: 40px;
  }
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Section2',
})
</script>
