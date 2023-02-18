import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewWallet from '../views/NewWalletView.vue'
import EditWallet from '../views/EditWalletView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/new_wallet',
      name: 'NewWallet',
      component: NewWallet
    },
    {
      path: '/wallet/:id',
      name: 'EditWallet',
      component: EditWallet,
      props: true
    },
  ]
})

export default router
