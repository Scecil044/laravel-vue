import {createWebHistory, createRouter} from "vue-router"
import Login from "../views/auth/Login.vue"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
    {
        path:"/login",
        name:"Login",
        component: Login,
    },
    {
        path:"/",
        name:"Home",
        component: Home,
    },
    {
        path:"/about",
        name:"About",
        component: About,
    },
    {
        path:"/:pathMatch(.*)*",
        name:"NotFound",
        component: NotFound,
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router;