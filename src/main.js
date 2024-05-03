import './assets/main.css'

import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Button from "primevue/button";
import Panel from "primevue/panel";
import InputText from "primevue/inputtext";

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'

import PrimeVue from "primevue/config";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .component("pv-toolbar", Toolbar)
    .component("pv-card", Card)
    .component("pv-button", Button)
    .component("pv-panel", Panel)
    .component("pv-inputtext", InputText)
    .use(router)
    .use(PrimeVue, {ripple: true})
    .mount('#app')
