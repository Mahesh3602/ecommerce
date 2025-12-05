import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '@/views/Category/AddCategory.vue'
import ListCategory from '@/views/Category/ListCategory.vue'
import EditCategory from '@/views/Category/EditCategory.vue'
import AddProduct from '@/views/Product/AddProduct.vue'
import ListProduct from '@/views/Product/ListProduct.vue'
import EditProduct from '@/views/Product/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/admin/category/add',
    name:'AddCategory',
    component: AddCategory
  },
  {
    path:'/admin/category/',
    name:'ListCategory',
    component: ListCategory
  },
  {
    path:'/admin/category/:id',
    name:'EditCategory',
    component: EditCategory
  },
  {
    path:'/admin/product/add',
    name:'AddProduct',
    component: AddProduct
  },
  
  {
    path: "/admin/product",
    name: "ListProduct",
    component: ListProduct,
  },
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router