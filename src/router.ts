import Vue from "vue";
import Router from "vue-router";
import List from "./components/List";
import Admin from "./components/Admin";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "list",
            component: List
        },
        {
            path: "/admin",
            name: "admin",
            component: Admin
        }
    ]
});