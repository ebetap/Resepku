import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Navigation from '@/components/Navigation'
import Futer from '@/components/Futer'
import Recipedetails from '@/components/Recipedetails'
import Allrecipe from '@/components/Allrecipe'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      mode: 'history',
      component: Home
    },
    {
      path: '/recipes',
      name: 'Allrecipe',
      mode: 'history',
      component: Allrecipe
    },
    {
      path: '/recipes/details',
      name: 'Recipedetails',
      mode: 'history',
      component: Recipedetails
    },
    {
      path: '/todo',
      name: 'Todo',
      mode: 'history',
      component: Todo
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve({x:0,y:0})
      },5)
    })
  }
})
