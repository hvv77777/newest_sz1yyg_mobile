<template>
    <div>我的购物车</div>
</template>

<script>
    import { mapActions } from 'vuex';
    
    export default {
        name: 'cart',
        props: {},
        methods: {
            ...mapActions('appShell/appBottomNavigator', [
                'showBottomNav',
                'activateBottomNav'
            ])
        },
        activated() {
            this.activateBottomNav('cart');
            this.showBottomNav();
        }
    }
</script>

<style lang="scss" scoped>
    
</style>