import { createRouter, createWebHistory } from 'vue-router'
import MemoContents from '../view/MemoContents'
import MemoList from '../view/MemoList'

const routes = [
  {
    path: '/',
    name: 'memoList',
    component: MemoList
  },
  {
    path: '/edit/:id',
    name: 'memoContents',
    component: MemoContents,
    props: true
  },
  {
    path: '/new',
    name: 'newMemo',
    component: MemoContents
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
