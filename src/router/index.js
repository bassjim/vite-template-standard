import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/front/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/CouponsView.vue')
      }
    ]
  },
  // 404
  {
    path: '/pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/newPage/pathMatch(.*)*',
    redirect: {
      path: '',
      name: 'Home',
      component: () => import('../views/front/HomeView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
