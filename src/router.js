import { createRouter, createWebHistory } from 'vue-router';

import appMain from './pages/appMain.vue';
import appIndex from './pages/appIndex.vue';
import appCategories from './pages/appCategories.vue';
import appTags from './pages/appTags.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: appMain
        },
        {
            path: '/index',
            name: 'index',
            component: appIndex
        },
        {
            path: '/categories',
            name: 'categories',
            component: appCategories
        },
        {
            path: '/tags',
            name: 'tags',
            component: appTags
        },
    ]
})

export { router }