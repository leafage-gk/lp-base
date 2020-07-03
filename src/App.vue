<template>
  <div id="app">
    <header-section v-if="showHeader" :fixed="fixedHeader" />
    <div class="contents" :class="{ 'with-header': showHeader }">
      <first-view />
      <section1 />
      <section2 />
      <form-section />
      <!-- ここにセクションを追加していく -->
    </div>
    <footer-section v-if="showFooter" />
    <top-scroller />
  </div>
</template>

<style lang="scss" scoped>
.contents {
  &.with-header {
    // ヘッダーがあるときはmargin-topを設定（ヘッダーはposition: absolute or fixed）
    margin-top: $header-height;
  }
}
</style>

<script>
// コンポーネントのインポート
import HeaderSection from '@/components/HeaderSection.vue'
import FirstView from '@/components/FirstView.vue'
import Section1 from '@/components/Section1.vue'
import Section2 from '@/components/Section2.vue'
import FormSection from '@/components/FormSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import TopScroller from '@/components/TopScroller.vue'

export default {
  name: 'App',
  components: {
    // コンポーネントの登録
    HeaderSection,
    FirstView,
    Section1,
    Section2,
    FormSection,
    FooterSection,
    TopScroller,
  },
  data() {
    return {
      // ヘッダーの表示オンオフ
      showHeader: true,
      // ヘッダーのfixedオンオフ
      fixedHeader: true,
      // フッターの表示オンオフ
      showFooter: true,
    }
  },
}
</script>
