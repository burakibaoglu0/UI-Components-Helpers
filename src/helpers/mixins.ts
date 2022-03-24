import Vue from "vue"

export const utilityMixin = Vue.extend({
    methods: {
        routeTo(route: string) {
            // @ts-ignore
            if (this.$router.path !== route) {
                this.$router.push(route).catch(() => {});
            }
        },
        scaleButtons(direction:string, id:any) {
            const button = document.getElementById(`${id}`) as HTMLElement;
            if (direction === 'down') {
                button.style.transform = 'scale(0.97)';
            } else {
                button.style.transform = 'scale(1)';
            }
        }
    }
});