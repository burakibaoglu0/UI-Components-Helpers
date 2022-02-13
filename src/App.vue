<template>
  <div id="app">
    <div v-if="!loginAnimate" class="login-view">
      <v-progress-circular :size="60" :width="3" color="white" indeterminate
        style="margin-right:20px; width:4%; height:8%;"></v-progress-circular> Loading...
    </div>
    <router-view class="router-animation" v-else />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginAnimate: false,
      }
    },
    mounted() {
      setTimeout(() => {
        this.loginAnimate = true;
      }, 1300)
    }
  }
</script>

<style lang="scss">
  @import "@/scss/index.scss";

  * {
    @include all;
    font-family: var(--my-font-family);
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: $body-background;
    position: relative;
  }

  #app {
    height: 100%;
  }

  .login-view {
    @include flex-container(row, center, center, nowrap);
    width: 100%;
    height: 100%;
    font-size: 4vmin;
    animation: fadeIn 1.3s;
    color: white;
  }

  .router-animation {
    animation: fadeOut 1.3s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    100% {
      opacity: 1;
    }

    0% {
      opacity: 0;
    }
  }
</style>