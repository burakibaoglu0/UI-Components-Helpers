//Burak İbaoğlu Slider Component

<template>
  <div class="slider-main">
    <template v-if="forImages">
      <div class="slide-left-icon" @click="scrollElement('left')">
        <BiIcon iconName="chevron-left" />
      </div>
      <div id="image-slider" class="slide-container">
        <img class="slide-image" v-for="image in imageArray" :key="image.src" :src="image.src">
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
        const slideContainer = document.getElementById('image-slider') as HTMLElement;
        let scrollCompleted = 0;
        let slideVar = setInterval(function () {
          if (direction == 'left') {
            slideContainer.scrollLeft -= 100;
          } else {
            slideContainer.scrollLeft += 100;
          }
          scrollCompleted += 20;
          if (scrollCompleted >= 100) {
            window.clearInterval(slideVar);
          }
        }, 50);
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
      @include flex-container(row, center, flex-start, nowrap);
      flex: 1 0 1px;
      width: 100%;
      gap: 1vw;
      overflow-x: hidden;
      transition: all 0.5s ease;

      .slide-image {
        flex: 0 0 auto;
        width: 25vw;
        height: 25vw;
        object-fit: cover;
        transform: 0.5s ease-in-out
      }
    }
  }
</style>