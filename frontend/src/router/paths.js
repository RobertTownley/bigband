import About from "@/views/About.vue";
import Dashboard from "@/views/Dashboard.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Logout from "@/views/Logout.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About,
    title: "About"
  },
  {
    path: "/accounts/login",
    name: "login",
    component: Login,
    title: "Login"
  },
  {
    path: "/accounts/logout",
    name: "logout",
    component: Logout,
    title: "Logout"
  },
  {
    path: "/accounts/password_reset/:uid/:token/",
    name: "password_reset",
    component: ResetPassword,
    title: "PasswordReset"
  },
  {
    path: "/accounts/register",
    name: "register",
    component: Register,
    title: "Register"
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    title: "My Account"
  }
];
