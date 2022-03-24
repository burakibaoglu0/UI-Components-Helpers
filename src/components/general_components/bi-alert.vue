// Burak İbaoğlu Alert Component

<template>
    <div @click.stop="" class="flash-message-container">
        <transition-group name="slide">
            <div v-for="(item,index) in alertList" :key="item.message + index" :id="item.message"
                :class="classObject(item)" :style="styleObject(item)">
                <template v-if="item.hasIcon">
                    <div class="flash-icon"></div>
                </template>
                <div class="flash-message-text">
                    {{item.message}}
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    import BiIcon from "@/components/general_components/bi-icon.vue";

    export default {
        data(){
            return{
                alertList:[],
            }
        },
        components:{
            BiIcon
        },
        props: {
            FlashMessage: {
                type: Object,
                required: true,
                default: {
                    message: '',
                    type: '',
                    icon: '',
                    hasIcon: false,
                }
            }
        },
        methods: {
            timeOutFunc(alert){
                setTimeout(() => {
                    this.alertList.splice(this.alertList.length-1,1);
                }, 3e3);
            },

            styleObject(element) {
                if (element.hasIcon) {
                    return {
                        '--url': "url(" + require('../../node_modules/@mdi/svg/svg/' + element.iconName + ".svg") + ")",
                    }
                }
            },
            classObject(element) {
                if (element.bordered) {
                    if (element.type === 'success') {
                        return 'flash-message-main success success-bordered';
                    } else if (element.type === 'error') {
                        return 'flash-message-main error error-bordered';
                    } else if (element.type === 'warning') {
                        return 'flash-message-main warning warning-bordered';
                    } else if (element.type === 'info') {
                        return 'flash-message-main info info-bordered';
                    }
                } else {
                    if (element.type === 'success') {
                        return 'flash-message-main success';
                    } else if (element.type === 'error') {
                        return 'flash-message-main error';
                    } else if (element.type === 'warning') {
                        return 'flash-message-main warning';
                    } else if (element.type === 'info') {
                        return 'flash-message-main info';
                    }
                }
            }
        },
        watch: {
            FlashMessage:{
                handler(){
                    this.alertList.unshift(this.FlashMessage);
                    this.timeOutFunc(this.FlashMessage);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "@/scss/index.scss";

    .slide-enter-active,.slide-leave-active {
        @include transition(all .3s ease-in-out);
        gap: 1vw;
    }

    .slide-enter,
    .slide-leave-to {
        opacity: 0;
        transform: translateX(30px);
        gap: 1vw;
    }

    $font-size: .8vw;
    $error: #f44336;
    $error-light : lighten($error, 30%);
    $warning: #ff9800;
    $warning-light : lighten($warning, 30%);
    $info: #2196f3;
    $info-light : lighten($info, 30%);
    $success: #4caf50;
    $success-light : lighten($success, 30%);

    .error {
        background-color: $error;
        color: #fff;
    }

    .warning {
        background-color: $warning;
        color: #fff;
    }

    .info {
        background-color: $info;
        color: #fff;
    }

    .success {
        background-color: $success;
        color: #fff;
    }

    .error-bordered {
        border-left: 5px solid $error-light;
    }

    .warning-bordered {
        border-left: 5px solid $warning-light;
    }

    .info-bordered {
        border-left: 5px solid $info-light;
    }

    .success-bordered {
        border-left: 5px solid $success-light;
    }

    .flash-message-container {
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;

        span {
            @include d-flex(column, flex-start, center);
            gap: 1vw;
            padding: 1vw;

            .flash-message-main {
                padding: .5vw 1vw;
                @include d-flex(row, space-between, center);
                gap: .5vw;
                border-radius: 3px;
                font-size: $font-size;

                .flash-icon {
                    @include d-flex(column, center, center);
                    flex: 1 0 1px;
                    -webkit-mask: var(--url) no-repeat 100% 100%;
                    mask: var(--url) no-repeat 100% 100%;
                    width: 1vw;
                    height: 1vw;
                    -webkit-mask-size: cover;
                    mask-size: cover;
                    background-color: #fff;

                    @media screen and (max-width: 1440px) {
                        width: 1.5vw;
                        height: 1.5vw;
                    }

                    @media screen and (max-width: 1024px) {
                        width: 2vw;
                        height: 2vw;
                    }

                    @media screen and (max-width: 768px) {
                        width: 2.5vw;
                        height: 2.5vw;
                    }

                    @media screen and (max-width: 570px) {
                        width: 3vw;
                        height: 3vw;
                    }

                    @media screen and (max-width: 480px) {
                        width: 3.5vw;
                        height: 3.5vw;
                    }
                }

                .flash-message-text {
                    @include d-flex(row, flex-start, center);
                }

                @media screen and (max-width: 1440px) {
                    font-size: calc(.8vw + .5vw);
                    padding: .6vw 1vw;
                    gap: .7vw;
                }

                @media screen and (max-width: 1024px) {
                    font-size: calc(.8vw + 1vw);
                    padding: .7vw 1vw;
                    gap: .9vw;
                }

                @media screen and (max-width: 768px) {
                    font-size: calc(.8vw + 1.5vw);
                    padding: .8vw 1vw;
                    gap: 1.2vw;
                }

                @media screen and (max-width: 570px) {
                    font-size: calc(.8vw + 2vw);
                    padding: 1vw;
                    gap: 1.4vw;
                }

                @media screen and (max-width: 480px) {
                    font-size: calc(.8vw + 2.5vw);
                    padding: 1.2vw 1vw;
                    gap: 1.6vw;
                }
            }

            @media screen and (max-width: 1440px) {
                gap: 1.2vw;
                padding: 1.2vw;
            }

            @media screen and (max-width: 1024px) {
                gap: 1.4vw;
                padding: 1.4vw;
            }

            @media screen and (max-width: 768px) {
                gap: 1.8vw;
                padding: 1.8vw;
            }

            @media screen and (max-width: 570px) {
                gap: 2vw;
                padding: 2vw;
            }

            @media screen and (max-width: 480px) {
                gap: 2.2vw;
                padding: 2.2vw;
            }
        }
    }
</style>
