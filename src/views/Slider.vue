<template>
    <div class="slider">
        <biSlider forImages :imageArray="images"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    // @ts-ignore
    import biSlider from '@/components/generic_components/bi-slider.vue'
    export default Vue.extend({
        components: {
            biSlider
        },
        data(){
            return{
                images:[
                    {
                        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1648043673706-3387c170b0d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1648043673706-3387c170b0d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                    },
                    {
                        src: 'https://images.unsplash.com/photo-1648043673706-3387c170b0d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
                    }
                ]
            }
        }
    })
</script>

<style lang="scss">
    @import "@/scss/index.scss";

    .slider{
        @include flex-container(row, center, center, nowrap);
        padding: 0 1vw;
        flex: 1 0 1px;
        width: 100%;
        height: 100%;
    }
</style>