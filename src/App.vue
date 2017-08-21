<template>
    <div id="app">
        <!--<keep-alive>-->
        	<router-view></router-view>
        <!--</keep-alive>-->
        <app-bottom-navigator
        class="app-shell-footer"
        @click-nav="handleClickBottomNav">
        </app-bottom-navigator>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import appBottomNavigator from '@/components/appBottomNavigator.vue';
    export default {
        name: 'app',
        components: {
            'app-bottom-navigator': appBottomNavigator
        },
        created() {
            //正则表达式匹配地址名字激活当前对应的导航栏
            let reg = /[^\/]+$/;
            this.activateBottomNav(window.location.href.match(reg).toString());
        },
        methods: {
            ...mapActions('appShell/appBottomNavigator', [
                'activateBottomNav'
            ]),
            handleClickBottomNav({name}) {
                // console.log(name);
                this.activateBottomNav(name);
            }
        }
    };
</script>

<style lang="scss" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        .app-shell-footer {
            position: fixed;
            left: 0;
            bottom: 0;
            right: 0
        }
    }
</style>
