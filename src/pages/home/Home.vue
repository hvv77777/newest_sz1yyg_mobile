<template>
    <div>
        <h2>LAVAS</h2>
        <h4>[ˈlɑ:vəz]</h4>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'home',
    props: {},
    methods: {
      
        ...mapActions('appShell/appBottomNavigator', [
            'showBottomNav',
            'activateBottomNav'
        ])
    },
    // async asyncData() {
    //     await new Promise((resolve, reject) => {
    //         setTimeout(resolve, 500);
    //     });
    // },
    activated() {
        this.activateBottomNav('home');
        this.showBottomNav();
    }
};
</script>

<style lang="scss" scoped>

h2{
    margin-top: 50%;
    font-size: 46px;
    font-weight: 500;
}
</style>
