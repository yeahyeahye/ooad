import Vue from 'vue'
import Router from 'vue-router'
import Activate from "../components/teacher/Activate";
import FindPassword from "../components/teacher/FindPassword";
import HomePage from "../components/teacher/HomePage";
import SetPassword from "../components/teacher/SetPassword";
import Login from "../components/Login";
import AccountManage from "../components/teacher/AccountManage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/teacher/Activate',
      component:Activate
    },
    {
      path:'/teacher/FindPassword',
      component:FindPassword
    },
    {
      path:'/teacher/HomePage',
      component:HomePage
    },
    {
      path:'/teacher/SetPassword',
      component:SetPassword
    },
    {
      path:'/teacher/AccountManage',
      component:AccountManage
    }
  ]
})
