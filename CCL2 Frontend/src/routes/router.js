import { createRouter, createWebHistory } from 'vue-router'
import indexRoutes from './indexRoutes';
import marketRoutes from "./marketRoutes";
import userRoutes from "./userRoutes";

const routes = [
    ...indexRoutes,
    ...marketRoutes,
    ...userRoutes,
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
