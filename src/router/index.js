import { createRouter, createWebHistory } from 'vue-router'
import SingIn from '../views/SingIn.vue'
import SingUp from '../views/SingUp.vue'
import Profil from '../views/Profil.vue'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import History from '../views/History.vue'
import Basket from '../views/Basket.vue'
import Account from '../views/Account.vue'
const routes = [

   {
      path: '/',
      name: 'SingIn',
      component: SingIn
   },
   {
      path: '/SingUp',
      name: 'SingUp',
      component: SingUp
   },
   {
      path: '/Profil',
      name: 'Profil',
      component: Profil,
      children: [
         {
            path: 'Home',
            name: 'Home',
            component: Home
         },
      ]
   },
   {
      path: '/Profil/Home/:id',
      name: 'Product',
      component: Product,
      props: true,
   },
   {
      path: '/Profil/History',
      name: 'History',
      component: History,
   },
   {
      path: '/Profil/Basket',
      name: 'Basket',
      component: Basket,
   }, {
      path: '/Profil/Account',
      name: 'Account',
      component: Account,
   },
   {
      path: '/:catchAll(.*)',
      name: 'SingIn',
      component: SingIn,
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
