export const utilityMixin = {
    methods: {
        routeTo(route) {
            if (this.$router.path !== route) {
                this.$router.push(route).catch(() => {});
            }
        },
    }
}
