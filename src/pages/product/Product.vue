<template>
    <div class="product-wrapper">
        <div class="search"></div>
        <div class="product-nav"></div>
        <div class="product-content">
            <ul class="orderBy">
                <li></li>
            </ul>
            <div class="content">
                <div class=""></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    
    export default {
        name: 'product',
        props: {},
        mounted() {
        },
        methods: {
            ...mapActions('appShell/appBottomNavigator', [
                'showBottomNav',
                'activateBottomNav'
            ])
        },
        activated() {
            this.activateBottomNav('product');
            this.showBottomNav();
        }
    }
</script>

<style lang="scss" scoped>
    
</style>