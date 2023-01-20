import {createRouter, createWebHistory} from 'vue-router';
import ButtonView from '../view/ButtonView.vue';
import CardViewVue from '../view/CardView.vue';

const router = createRouter({
    routes: [
        {
            name: "按钮",
            path: "/buttons",
            component: ButtonView
        },
        {
            name: "卡片",
            path: "/cards",
            component: CardViewVue
        }
    ],
    history: createWebHistory()
});

export default router;