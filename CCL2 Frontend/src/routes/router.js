// importing the vue router and the routes

import {createRouter, createWebHistory} from 'vue-router'
import indexRoutes from './indexRoutes';
import marketRoutes from "./marketRoutes";
import userRoutes from "./userRoutes";


// setting the routes for the application

const routes = [
    ...indexRoutes,
    ...marketRoutes,
    ...userRoutes,
]

// creating the router and exporting it
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
