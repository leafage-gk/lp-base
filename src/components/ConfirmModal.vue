<template>
  <div class="modal" v-show="value">
    <div v-show="confirm" class="content">
      <form ref="form" @submit.prevent="onSubmit">
        <div class="card">
          <h2 class="heading-small">確認</h2>
          <div class="scrollable">
            <table>
              <tbody class="text-small">
                <tr>
                  <th>お名前</th>
                  <td>
                    <input type="hidden" name="name" :value="name" />
                    {{ name }}
                  </td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td>
                    <input type="hidden" name="email" :value="email" />
                    {{ email }}
                  </td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>
                    <input type="hidden" name="phone" :value="phone" />
                    {{ phone }}
                  </td>
                </tr>
                <tr>
                  <th>ご相談内容</th>
                  <td>
                    <input type="hidden" name="body" :value="body" />
                    {{ body }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="actions">
            <button type="button" class="button-outlined cancel" @click="onCancel">キャンセル</button>
            <input class="button-outlined" type="submit" value="送信" />
          </div>
        </div>
      </form>
    </div>
    <div v-show="!confirm" class="content invisible">
      <div class="card">
        <h2 class="heading-small">送信完了</h2>
        <div class="scrollable text-small">
          <p>お問い合わせは、以下の内容で送信されました。</p>
          <hr />
          <p>お名前：{{ name }}</p>
          <p>メールアドレス：{{ email }}</p>
          <p>電話番号：{{ phone }}</p>
          <p>ご相談内容：<br />{{ body }}</p>
        </div>
        <div class="actions">
          <button type="button" class="button-outlined" @click="onCancel">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props: {
    name: String,
    email: String,
    phone: String,
    body: String,
    value: Boolean,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  data() {
    return {
      confirm: true,
    }
  },
  methods: {
    onSubmit() {
      this.confirm = false
      const data = new FormData(this.$refs.form)
      console.log(...data.entries())
      // fetch('https://script.google.com/macros/s/xxxx/exec', { method: 'POST', body: new FormData(this.$refs.form)})
      //   .then(() => {
      //     this.confirm = false
      //   })
      //   .catch(error => alert('Error!', error.message))
    },
    onCancel() {
      this.$emit('input', false)
      this.confirm = true
    },
  }
}
</script>

<style lang="scss" scoped>
.cancel {
  background-color: $white;
  border: 0.2rem solid $grey;
  color: $grey;
  &:hover {
    background-color: $grey;
    color: $white;
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba($black, 0.6);
  z-index: 100;
}

.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: $white;
  border-radius: 0.5vw;
  padding: 2%;
  box-shadow: 0 0 1.2rem 0.3rem rgba($black, 0.3);
  overflow: hidden;

  form {
    position: relative;
    height: 100%;
  }

  @include breakpoint-sp {
    width: 92%;
    height: 97%;
    border-radius: 0;
    padding: 4%;
  }

  .card {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;

    h2 {
      display: inline;
      position: relative;
    }
    .scrollable {
      width: 100%;
      flex: 1;
      overflow-y: scroll;
      p {
        position: relative;
        text-align: left;
      }
      table, tbody, tr {
        width: 100%;
      }
      th {
        width: 30%;
        text-align: right;
        vertical-align: top;
        padding-bottom: 5%;
      }
      td {
        text-align: left;
        padding-left: 2%;
        padding-bottom: 5%;
      }
    }

    .actions {
      margin-top: 4%;
      text-align: right;
      > * {
        margin-left: 1rem;
      }
    }
  }
}
</style>
