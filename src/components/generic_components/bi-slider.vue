//Burak İbaoğlu Slider Component

<template>
  <div class="slider-main">
    <template v-if="forImages">
      <div class="slide-left-icon" @click="scrollElement('left')">
        <BiIcon iconName="chevron-left" />
      </div>
      <div class="slide-container">
        <div id="wrapper" class="slide-wrapper">
          <img class="slide-image" v-for="(image,i) in imageArray" :key="image.src + i" :src="image.src">
        </div>
      </div>
      <div class="slide-right-icon" @click="scrollElement('right')">
        <BiIcon iconName="chevron-right" />
      </div>
    </template>
    <template v-if="forElements">
      <div class="slide-left-icon">
        <BiIcon iconName="chevron-left" />
      </div>
      <div class="slide-container">
        <slot></slot>
      </div>
      <div class="slide-right-icon">
        <BiIcon iconName="chevron-right" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import BiIcon from './bi-icon.vue';

  export default Vue.extend({
    data() {
      return {
        slideLeft: 0
      }
    },
    props: {
      forImages: {
        type: Boolean,
        default: true,
      },
      imageArray: {
        type: Array,
        default: () => [{
          src: String,
        }],
      },
      forElements: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      BiIcon
    },
    methods: {
      scrollElement(direction: string) {
        const slideContainer = document.getElementById('wrapper') as HTMLElement;
        if (this.slideLeft >= (this.imageArray.length - 2) * -100 && direction === 'right') {
          this.slideLeft -= 100;
          slideContainer.style.left = this.slideLeft + 'vw';
        } else if (this.slideLeft < 0 && direction === 'left') {
          this.slideLeft += 100;
          slideContainer.style.left = this.slideLeft + 'vw';
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "@/scss/index.scss";

  .slider-main {
    @include flex-container(row, center, space-between, nowrap);
    flex: 1 0 1px;
    width: 100%;
    position: relative;

    .slide-left-icon {
      @include flex-container(row, center, center, nowrap);
      flex: 0 0 auto;

      .bi-icon {
        cursor: pointer;
      }
    }

    .slide-right-icon {
      @extend .slide-left-icon;
    }

    .slide-container {
      @include flex-container(row, stretch, flex-start, nowrap);
      flex: 1 0 1px;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      position: relative;

      .slide-wrapper {
        @include flex-container(row, center, center, nowrap);
        flex: 1 0 1px;
        transition: all 0.5s ease;
        position: absolute;
        top: 0;
        left: 0;

        .slide-image {
          flex: 1 0 1px;
          width: 100vw;
          height: 100vh;
          object-fit: scale-down;
          transform: 0.5s ease-in-out;
          -webkit-user-drag: none;
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          pointer-events: none;
        }
      }
    }
  }
</style>