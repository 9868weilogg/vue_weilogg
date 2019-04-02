import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import LoggHeader from "./layout/LoggHeader";
import LoggFooter from "./layout/LoggFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Resume from "./views/Resume.vue";
import Blog from "./views/Blog.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "profile",
      components: {
        header: LoggHeader,
        default: Profile,
        footer: LoggFooter
      }
    },
    {
      path: "/resume",
      name: "resume",
      components: {
        header: LoggHeader,
        default: Resume,
        footer: LoggFooter
      }
    },
    {
      path: "/blogs",
      name: "blog",
      components: {
        header: LoggHeader,
        default: Blog,
        footer: LoggFooter
      }
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: LoggHeader,
        default: Components,
        footer: LoggFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: LoggHeader,
        default: Landing,
        footer: LoggFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: LoggHeader,
        default: Login,
        footer: LoggFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: LoggHeader,
        default: Register,
        footer: LoggFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: LoggHeader,
        default: Profile,
        footer: LoggFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
