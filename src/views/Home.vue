<template>
  <div class="home">
    <div class="navigate-buttons">
      <bi-button @click.native="routeTo(example.route)" class="navigate-button" v-for="example in exampleList"
        :key="example.title" bgc="#ebf2ff" :btnText="example.title" width="5vw" height="2vw" isHoverable
        hoverColor="#192c4a" hoverTextColor="#fff" radius=".5vw"></bi-button>
    </div>
    <div class="about">
      <img class="about-img" src="@/assets/images/coder.svg" alt="">
      <div class="about-text">Welcome to my playground! I publish components, utilities and more that I have developed
        and am developing in this repository. If I have to briefly talk about myself; I graduated from Karadeniz
        Technical University Computer Engineering Department. I am actively working in the field of web programming.
      </div>
    </div>
    <div class="ideas">
      <img style="width:20vw;" src="@/assets/images/ideas.svg" alt="">
    </div>
  </div>
</template>

<script>
  import biButton from "@/components/general_components/bi-button.vue";
  import {
    exampleList
  } from "@/helpers/enums";
  import {
    utilityMixin
  } from "@/helpers/mixins";

  export default {
    name: 'Home',
    mixins: [utilityMixin],
    components: {
      biButton
    },
    data() {
      return {
        exampleList
      }
    }
  }
</script>

<style lang="scss">
  @import "@/scss/index.scss";

  .home {
    @include flex-container(column, stretch, flex-start, nowrap);
    width: 100%;
    height: 100%;
    padding: 1% 25%;

    .navigate-buttons {
      @include flex-container(row, flex-start, flex-start, wrap);
      width: 100%;
      height: 100%;
      padding: 4% 2%;
      border: .1vmin solid #ebf2ff;
      border-radius: .5vmin;
      flex: 1 0 1px;

      .navigate-button {
        font-size: .8vw;
      }
    }

    .about {
      @include flex-container(column, stretch, flex-start, nowrap);
      position: fixed;
      top: 2px;
      left: 2px;
      color: white;
      flex: 0 0 auto;
      gap: 1vmin;
      width: 20vw;

      .about-img {
        width: 20vw;
      }

      .about-text {
        @include flex-container(row, center, flex-start, nowrap);
        font-size: .9vw;
        padding: 0 .5vw;
      }
    }

    .ideas {
      position: fixed;
      right: 2px;
      bottom: 2px;
      flex: 0 0 auto;
    }
  }
</style>