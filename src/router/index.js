import { createRouter, createWebHistory } from 'vue-router';

import RootComponent from '../public/components/home/home.component.vue'
import LoginComponent from '../public/page/authentication/log-in.component.vue'
import RegisterComponent from "../public/page/authentication/register.component.vue";
import ContactComponent from '../public/components/contact/contact.component.vue';
import touristProfileComponent from "@/tourist/components/tourist-profile/tourist-profile.component.vue";
import PromotionListComponent from "@/public/components/promotions/promotion-list.component.vue";
import PromotionCardComponent from "@/public/components/promotions/promotion-card.component.vue";
import PromotionComponent from "@/public/components/promotions/promotion.component.vue";
import DestinationsComponent from "@/public/components/destinations/destinations.component.vue";
import InfoDestinationsComponent from "@/public/components/infodestinations/infodestinations.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:"log-in"
        },
        {
            path: '/log-in',
            name:'log-in',
            component: LoginComponent,
        },
        {
            path: '/register',
            name:'register',
            component:RegisterComponent
        },
        {
            path: '/home',
            component: RootComponent },
        {
            path: "/contact",
            component: ContactComponent
        },
        {
            path: "/profile-tourist",
            component: touristProfileComponent
        },
        {
            path:"/destination",
            component: DestinationsComponent
        },
        {
            path:"/infodestination",
            component: InfoDestinationsComponent
        },
        {
            path:"/promotion",
            component: PromotionComponent
        }
    ]
    ,
});

export default router;
