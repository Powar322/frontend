import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'collectionsMain',
      component: ()=> import('@/pages/CollectionsMenu.vue'),
    },
    {
      path: '/collections/:id',
      name: 'collectionItem',
      component: ()=> import('@/pages/CollectionItem.vue')
    },
    {
      path: '/testcase/:id',
      name: 'testCaseItem',
      component: ()=> import('@/pages/TestCase.vue')
    }
  ],
})

export default router
