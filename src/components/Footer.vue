<template>
  <div class="footer">
    <container class="info">
      <div class="row grey-dark-text">
        <div class="column">
          <ul>
            <li>
              footerlink1
            </li>
            <li>
              footerlink2
            </li>
            <li>
              footerlink3
            </li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li>
              footerlink4
            </li>
            <li>
              footerlink5
            </li>
            <li>
              footerlink6
            </li>
          </ul>
        </div>
      </div>
    </container>
    <div class="copyright">
      © STUDIO CLEAF 2020
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  widows: 100%;

  .copyright {
    width: 100%;
  }

  .info {
    background: $secondary;
    .row {
      display: flex;
      flex-wrap: wrap;
      padding: 30px;
      .column {
        flex: 1;
        li {
          margin: 5px;
          font-size: $text-small;
        }
      }
    }
  }

  .copyright {
    background: $grey-dark;
    padding: 5px 30px;
    color: white;
    text-align: center;
    font-size: $text-medium;
  }
}
</style>

<script>
import Container from './Container.vue'

export default {
  name: 'Footer',
  components: {
    Container,
  },
}
</script>
