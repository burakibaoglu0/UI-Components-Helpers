// Burak İbaoğlu Button Component

<template>
    <div :id="btnText" :style="variables" class="bi-button" @mouseenter="hoverActive" @mouseleave="hoverDeactive">
        <div v-if="hasIcon" class="button-icon">
            <BiIcon :color=" hoverControl ? `${hoverTextColor}` : `${textColor}` " :iconName="iconName"/>
        </div>
        <div class="button-title">{{btnText}}</div>
    </div>
</template>

<script>
    import BiIcon from "./bi-icon.vue";

    export default {
        data(){
            return{
                hoverControl: false,
            }
        },
        components: {
            BiIcon
        },
        props: {
            btnText: {
                //inner text
                type: String,
                required: true
            },
            textColor: {
                //text color
                type: String,
                default: "#000"
            },
            width: {
                //button width
                type: String,
                required: true
            },
            height: {
                //button height
                type: String ,
                required: true
            },
            bgc: {
                // button background-color
                type: String,
                required: true,
                default: '#fff'
            },
            isHoverable: {
                // button hoverable
                // if true, button will change color on hover
                type: Boolean
            },
            hoverColor: {
                // button hover color
                // if isHoverable is true, this background-color will be used
                type: String
            },
            hoverTextColor:{
                // button hover text color
                // if isHoverable is true, this text color will be used
                type: String
            },
            isClickable: {
                // button clickable
                // if true, button
                type: Boolean
            },
            hasIcon: {
                // button icon
                // if true, button will have icon
                type: Boolean
            },
            iconName: {
                // button icon name
                // if hasIcon is true, this icon will be used
                type: String
            },
            radius:{
                // button border-radius
                type: String
            }
        },
        methods:{
            hoverActive() {
                //if button is hoverable
                if (this.isHoverable) {
                    //get element for styling
                    const buttonElement = document.getElementById(`${this.btnText}`);
                    this.hoverControl = true;

                    //set button background-color
                    if (this.hoverColor) {
                        buttonElement.style.backgroundColor = this.hoverColor;
                        buttonElement.style.color = this.hoverTextColor;
                    }
                }
            },
            hoverDeactive() {
                //if button is hoverable
                if (this.isHoverable) {
                    //get element for styling
                    const buttonElement = document.getElementById(`${this.btnText}`);
                    this.hoverControl = false;
                    //set button background-color
                    if (this.bgc) {
                        buttonElement.style.backgroundColor = this.bgc;
                        buttonElement.style.color = this.textColor;
                    }
                }
            }
        },
        computed:{
            variables(){
                return {
                    '--btn-width': this.width,
                    '--btn-height': this.height,
                    '--btn-backgroundColor': this.bgc,
                    '--btn-text-color': this.textColor,
                    '--btn--borderRadius': this.radius
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "@/scss/index.scss";

    .bi-button{
        @include flex-container(row,center,space-evenly,nowrap);
        width: var(--btn-width);
        height: var(--btn-height);
        background-color: var(--btn-backgroundColor);
        color: var(--btn-text-color);
        border-radius: var(--btn--borderRadius);
        cursor:pointer;
        @include transition(all .2s ease-in-out);
        font-size: .8vw;
    }
</style>