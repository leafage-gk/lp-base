<template>
  <div id="app">
    <Header v-if="showHeader" :fixed="fixedHeader" />
    <div class="contents" :class="{ 'with-header': showHeader }">
      <FirstView />
      <Section1 />
      <Section2 />
      <!-- ここにセクションを追加していく -->
    </div>
    <Footer v-if="showFooter" />
    <TopScroller />
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
import Header from '@/components/Header.vue'
import FirstView from '@/components/FirstView.vue'
import Section1 from '@/components/Section1.vue'
import Section2 from '@/components/Section2.vue'
import Footer from '@/components/Footer.vue'
import TopScroller from '@/components/TopScroller.vue'

export default {
  name: 'App',
  components: {
    // コンポーネントの登録
    Header,
    FirstView,
    Section1,
    Section2,
    Footer,
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
