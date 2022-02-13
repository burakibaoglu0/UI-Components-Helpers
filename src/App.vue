<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

  @import "@/scss/index.scss";

  *{
    @include all;
    font-family: var(--my-font-family);
  }

  html,body{
    height: 100%;
  }

  body{
    background-color: $body-background;
    position:relative;
  }

  #app{
    width:100%;
    height: 100%;
  }


</style>
