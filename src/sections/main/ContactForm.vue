<template>
  <la-container id="contact-form" class="contact-form">
    <h2 class="heading-medium white-text">お問い合わせ</h2>
    <la-form class="contact-form__form">
      <la-form-group>
        <template #label>
          <label for="name">お名前</label>
        </template>
        <template #input>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="例）山田 太郎"
            required
          />
        </template>
      </la-form-group>
      <la-form-group>
        <template #label>
          <label for="email">メールアドレス</label>
        </template>
        <template #input>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="例）info@yamada.jp"
            required
          />
        </template>
      </la-form-group>
      <la-form-group>
        <template #label>
          <label for="type">タイプ</label>
        </template>
        <template #input>
          <select name="type" id="type" required>
            <option value="1">タイプ1</option>
            <option value="1">タイプ2</option>
            <option value="1">タイプ3</option>
          </select>
        </template>
      </la-form-group>
      <la-form-group>
        <template #label>
          <label for="body">ご相談内容</label>
        </template>
        <template #input>
          <textarea
            name="body"
            rows="6"
            id="body"
            placeholder="例）資料請求希望です。"
          ></textarea>
        </template>
      </la-form-group>
      <template #actions>
        <la-btn type="submit" outlined>
          確認画面へ
        </la-btn>
      </template>
    </la-form>
  </la-container>
</template>

<style lang="scss">
.contact-form {
  padding-top: 2%;
  padding-bottom: 5%;
  text-align: center;
  background: $primary;

  &__form {
    width: 70%;
    margin: 0 auto;
    margin-top: 5%;
    @include breakpoint-sp {
      width: 82%;
      padding: 4%;
    }
  }
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactForm',
})
</script>
