<template>
  <form class="contact-form" @submit.prevent="onSubmit">
    <div class="form-group">
      <div class="form-label">
        <label for="name">お名前</label>
        <span class="required">必須</span>
      </div>
      <div class="form-input">
        <input
          v-model="name"
          type="text"
          name="name"
          id="name"
          placeholder="例）山田 太郎"
          required
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">
        <label for="email">メールアドレス</label>
        <span class="required">必須</span>
      </div>
      <div class="form-input">
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="例）info@yamada.jp"
          required
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">
        <label for="phone">電話番号</label>
        <span class="required">必須</span>
      </div>
      <div class="form-input">
        <input
          v-model="phone"
          type="text"
          name="phone"
          pattern="^[0-9]{2,4}(-)?[0-9]{2,4}(-)?[0-9]{3,4}$"
          id="phone"
          placeholder="例）0120-000-0000"
          required
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">
        <label for="body">ご相談内容</label>
        <span class="option">任意</span>
      </div>
      <div class="form-input">
        <textarea
          v-model="body"
          name="body"
          rows="6"
          id="body"
          placeholder="例）資料請求希望です。"
        ></textarea>
      </div>
    </div>
    <div class="form-submit">
      <input class="button-outlined" type="submit" value="確認画面へ" />
    </div>
    <confirm-modal
      v-model="confirm"
      :name="name"
      :email="email"
      :phone="phone"
      :body="body"
    />
  </form>
</template>

<script>
import ConfirmModal from './ConfirmModal.vue'

export default {
  name: 'ContactForm',
  components: {
    ConfirmModal,
  },
  data() {
    return {
      confirm: false,
      name: '',
      email: '',
      phone: '',
      body: '',
    }
  },
  methods: {
    onSubmit() {
      this.confirm = true
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-form {
  display: block;
  padding: 2%;
  background-color: $white;
  border-radius: 1%;
  box-shadow: 0 0 12px 6px rgba($black, 0.3);

  .form-group {
    display: flex;
    width: 100%;
    margin: 5% 0;

    @include breakpoint-sp {
      flex-direction: column;
    }

    .form-label {
      flex: 0.5;
      text-align: right;
      padding: 1% 5%;
      font-size: 2rem;
      label {
        font-weight: bold;
      }
      .required {
        color: #FE1818;
      }
      .option {
        color: #A0A0A0;
      }
      @include breakpoint-tablet {
        font-size: 1.5625vw;
      }

      @include breakpoint-sp {
        text-align: left;
        font-size: 2rem;
      }
    }

    .form-input {
      flex: 1.2;
      text-align: left;

      textarea::-webkit-scrollbar {
        display: none;
      }

      input, select, textarea {
        width: 90%;
        padding: 2%;
        border-radius: 1vw;
        border: 2px solid #A0A0A0;
        font-size: 1.8rem;

        @include breakpoint-tablet {
          font-size: 1.40625vw;
        }

        @include breakpoint-sp {
          font-size: 1.8rem;
          width: 95%;
        }
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer; 
        width: 95%;
        &::-ms-expand {
          display: none;
        }
        @include breakpoint-sp {
          width: 100%;
        }
      }
    }
  }

  .form-submit {
    text-align: center;
    padding-bottom: 5%;
  }
}
</style>