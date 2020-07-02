<template>
  <div class="container">
    <template v-if="fluid">
      <img v-if="!isSp && !!image" :src="image" :alt="imageAlt" />
      <img v-if="isSp && !!imageSp" :src="imageSp" :alt="imageAlt" />
      <div :class="{ absolute: !!image }">
        <slot />
      </div>
    </template>
    <div v-else class="content">
      <img v-if="!isSp && !!image" :src="image" :alt="imageAlt" />
      <img v-if="isSp && !!imageSp" :src="imageSp" :alt="imageAlt" />
      <div :class="{ absolute: !!image }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    imageSp: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
  },
  computed: {
    /**
     * @returns {boolean}
     */
    isSp() {
      return this.$root.$data.breakpoints.sp
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  > img {
    width: 100%;
  }
  .content {
    position: relative;
    @include breakpoint-pc {
      width: $tablet;
    }
    @include breakpoint-not-pc {
      width: 100%;
    }
    margin: 0 auto;
  }
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
