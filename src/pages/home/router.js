/**
 * @file home router
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

import Home from '@/pages/home/Home.vue';

export default {
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
};
