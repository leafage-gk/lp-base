<template>
  <div class="top-scroller" :class="{ active }" @click="handleClick">
    <a>
      <span class="arrow-up"></span>
    </a>
  </div>
</template>

<script>
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if(t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

export default {
  name: 'TopScroller',
  data() {
    return {
      scrollTimerId: null,
      active: false,
    }
  },
  methods: {
    onScroll() {
      if(this.scrollTimerId != null) {
        clearTimeout(this.scrollTimerId)
      }
      this.scrollTimerId = setTimeout(() => {
        if (window.pageYOffset > 0) {
          this.active = true
        } else {
          this.active = false
        }
      }, 500)
    },
    handleClick() {
      const duration = 1000
      const start = window.pageYOffset
      const change = -start
      const increment = 30

      let currentTime = 0
      const animateScroll = () => {
          currentTime += increment
          const val = easeInOutQuad(currentTime, start, change, duration)
          window.scrollTo(0, val)
          if (currentTime < duration) {
              setTimeout(animateScroll, increment)
          } else {
              window.scrollTo(0, 0)
          }
      };
      animateScroll()
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style lang="scss" scoped>
.top-scroller {
    bottom: 20px;
    opacity: 0;
    position: fixed;
    right: 20px;
    transition: all 0.3s ease;
    visibility: hidden;
    z-index: 9999;

    &:hover {
      cursor: pointer;
      opacity: 0.6 !important;
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }

    .arrow-up {
      -webkit-align-items: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      display: flex;
      height: 64px;
      -moz-justify-content: center;
      -webkit-justify-content: center;
      justify-content: center;
      position: relative;
      width: 64px;
      &::before {
        border: solid #fff;
        border-width: 5px 5px 0 0;
        content: '';
        display: block;
        height: 10px;
        position: relative;
        top: 2px;
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        width: 10px;
      }
    }
}
</style>
