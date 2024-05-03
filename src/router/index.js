import { createRouter, createWebHistory } from 'vue-router';

import RootComponent from '../public/components/home/home.component.vue'
import ContactComponent from '../public/components/contact/contact.component.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: RootComponent },
        {
            path: "/contact",
            component: ContactComponent
        }
    ]
    ,
});

export default router;
