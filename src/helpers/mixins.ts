export const utilityMixin = {
    methods: {
        routeTo(route) {
            if (this.$router.path !== route) {
                this.$router.push(route).catch(() => {});
            }
        },
        scaleButtons(direction, id) {
            const button = document.getElementById(`${id}`);
            if (direction === 'down') {
                button.style.transform = 'scale(0.97)';
            } else {
                button.style.transform = 'scale(1)';
            }
        }
    }
}