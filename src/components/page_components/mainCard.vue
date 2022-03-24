<template>
    <div class="card-container">
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    @import "@/scss/index.scss";

    .card-container {
        @include flex-container(row, flex-start, flex-start, wrap);
        width: 100%;
        height: 100%;
        padding: 4% 2%;
        border: .1vmin solid #ebf2ff;
        border-radius: .5vmin;
        flex: 1 0 1px;
        gap: 3vw;
    }
</style>