//Burak İbaoğlu Icon Component

<template>
    <div :style="iconStyle" :class="iconClass"></div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'BiIcon',
        props: {
            iconName: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: '#000'
            },
            size: {
                type: String,
                default: '24px'
            }
        },
        computed: {
            iconClass() {
                return `bi-icon bi-${this.iconName}`;
            },
            iconStyle() {
                return {
                    '--url': "url(" + require('../../../node_modules/@mdi/svg/svg/' + this.iconName + ".svg") + ")",
                    '--color': this.color,
                    '--size': this.size
                }
            }
        }
    })
</script>

<style lang="scss">
    @import '@/scss/index.scss';

    .bi-icon {
        @include flex-container(column, center, center, nowrap);
        flex: 0 0 auto;
        -webkit-mask: var(--url) no-repeat 100% 100%;
        mask: var(--url) no-repeat 100% 100%;
        width: var(--size);
        height: var(--size);
        -webkit-mask-size: cover;
        mask-size: cover;
        background-color: var(--color);
        @include transition(all ease-in-out .2s); 
    }
</style>