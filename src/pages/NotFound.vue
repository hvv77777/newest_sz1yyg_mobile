<template>
    <div class="app-not-found-page">
        <div class="app-not-found-title text-xs-center">
            <!-- <div class="not-found-avatar">
                <img src="">
            </div> -->
            <p>页面未找到</p>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'notFound',
    methods: {
        ...mapActions('appShell/appBottomNavigator', [
            'hideBottomNav'
        ])
    },
    activated() {
        this.hideBottomNav();
    }
};
</script>

<style lang="scss" scoped>

.app-not-found-title{
    margin-top: 50px;
    color: #666;
    font-size: 24px;
    font-weight: bold;
}
.not-found-avatar-icon{
    width: 120px;
    height: 120px;
    font-size: 100px;
}
</style>
