import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import AboutView from '../views/AdminView.vue'
import ProductView from '../views/ProductView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ContactView from '../views/ContactView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import UserProfileView from '../views/UserProfileView.vue'
// import { useStore } from 'vuex'
// const store = useStore();

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView,
    
    // beforeEnter() {
    //   if(!store.state.user) {
    //     router.push({name: 'login'});
    //   }
    // },
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: SingleProductView,
    props: true
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserProfileView,
    props: true
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
