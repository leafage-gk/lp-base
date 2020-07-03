<template>
  <container class="form-section">
    <h2 class="heading-medium mb-4 white-text">お問い合わせ</h2>
    <contact-form class="form" />
  </container>
</template>

<style lang="scss" scoped>
.form-section {
  background-color: $primary;
  padding-top: 2%;
  padding-bottom: 5%;
  text-align: center;

  .form {
    width: 70%;
    margin-top: 5%;
    margin: 0 auto;

    @include breakpoint-sp {
      width: 82%;
      padding: 4%;
    }
  }
}
</style>

<script>
import Container from './Container.vue'
import ContactForm from './ContactForm.vue'

export default {
  name: 'FormSection',
  components: {
    Container,
    ContactForm,
  },
}
</script>