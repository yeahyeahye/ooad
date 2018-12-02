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
import NewCourse from "../components/teacher/NewCourse";
import NewSeminar from "../components/teacher/NewSeminar";
import TotalSeminar from "../components/teacher/TotalSeminar";
import SetRound from "../components/teacher/SetRound";
import StartSeminar from "../components/teacher/StartSeminar";
import SuspendSeminar from "../components/teacher/SuspendSeminar";
import BeforeSeminar from "../components/teacher/BeforeSeminar";
import UpdateSeminarInfo from "../components/teacher/UpdateSeminarInfo";

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
    },
    {
      path: '/teacher/NewCourse',
      component: NewCourse
    },
    {
      path: '/teacher/NewSeminar',
      component: NewSeminar
    },
    {
      path: '/teacher/TotalSeminar',
      component: TotalSeminar
    },
    {
      path: '/teacher/SetRound',
      component: SetRound
    },
    {
      name: 'StartSeminar',
      path: '/teacher/StartSeminar',
      component: StartSeminar
    },
    {
      name: 'PauseSeminar',
      path: '/teacher/SuspendSeminar',
      component: SuspendSeminar
    },
    {
      name: 'BeforeSeminar',
      path: '/teacher/BeforeSeminar',
      component: BeforeSeminar
    },
    {
      name: 'UpdateSeminarInfo',
      path: '/teacher/UpdateSeminarInfo',
      component: UpdateSeminarInfo
    }

  ]
})
