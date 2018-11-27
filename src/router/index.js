import Vue from 'vue'
import Router from 'vue-router'
import Activate from "../components/teacher/Activate";
import FindPassword from "../components/teacher/FindPassword";
import HomePage from "../components/teacher/HomePage";
import SetPassword from "../components/teacher/SetPassword";
import Login from "../components/Login";
import AccountManage from "../components/teacher/AccountManage";
import EditEmail from "../components/teacher/EditEmail";
import SeminarPage from "../components/teacher/SeminarPage";
import EditPassword from "../components/teacher/EditPassword";
import CourseManage from "../components/teacher/CourseManage";

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
    },
    {
      path: '/teacher/EditEmail',
      component: EditEmail
    },
    {
      path: '/teacher/SeminarPage',
      component: SeminarPage
    },
    {
      path: '/teacher/EditPassword',
      component: EditPassword
    },
    {
      path: '/teacher/CourseManage',
      component: CourseManage
    }
  ]
})
