import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Game from '../pages/Game.vue'


const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/game",
        name: "game",
        component: Game,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
