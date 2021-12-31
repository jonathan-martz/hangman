import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '@/views/Homepage.vue';
import Impressum from '@/views/Impressum.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/impressum', component: Impressum }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;