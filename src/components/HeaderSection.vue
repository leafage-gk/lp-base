<template>
  <div class="header" :class="{ 'fixed': fixed, elevation }">
    <div class="logo">
      <img src="https://via.placeholder.com/128x62/3F51B5/FFFFFF?text=LOGO" alt="ロゴ" />
    </div>
    <div class="spacer" />
    <div :class="{ menu: true, show: showMenu, hide: !showMenu }" @click="showMenu = false">
      <div class="menu-list" @click="(e) => e.stopPropagation()">
        <a href="#" @click="showMenu = false">リンク 1</a>
        <a href="#" @click="showMenu = false">リンク 2</a>
        <a href="#" @click="showMenu = false">リンク 3</a>
      </div>
    </div>
    <div class="sp menu-icon" @click="showMenu = true">
      <img src="@/assets/menu-icon.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: $header-height;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3rem;

  .logo {
    font-weight: bold;
    font-size: 2.4rem;
  }

  .spacer {
    flex-grow: 1;
  }

  &.fixed {
    position: fixed;
  }
}

.menu-list {
  display: flex;
  a {
    display: block;
  }
}

.menu-icon {
  border-radius: 3rem;
  padding: 1rem;
  &:hover {
    background: rgba($black, 0.2);
  }
}

@include breakpoint-not-sp {
  .menu-list {
    align-items: center;
    justify-content: flex-start;
    a {
      margin: 0 10px;
      height: $header-height;
      line-height: $header-height;
      font-size: 1.5rem;
      color: $white;
    }
  }
}

@include breakpoint-sp {
  .header {
    padding: 0 1rem;
  }
  .menu {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($black, 0.6);
    @include vender-prefix(transition, opacity 0.3s, visibility 0s ease 0.3s);
    &.show {
      visibility: visible;
      transition-delay: 0s;
      opacity: 1;
      .menu-list {
        @include vender-prefix(transform, translateX(0));
        transition-delay: 0s;
      }
    }
  }
  .menu-list {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background: $white;
    padding: 1rem;
    @include vender-prefix(transform, translateX(100%));
    @include vender-prefix(transition, transform 0.3s, opacity 0.3s, visibility 0s ease 0.3s);
    @include elevation(rgba($black, 0.2));
    a {
      width: 100%;
      font-size: 2rem;
      padding: 0.5rem 2rem;
      color: $primary;
      border-radius: 0.5rem;
      &:hover {
        background: $grey-lighter;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Header',
  props: {
    fixed: Boolean
  },
  data() {
    return {
      showMenu: false,
      elevation: true,
    }
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 0) {
        this.elevation = true
      } else {
        this.elevation = false
      }
    },
  },
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
