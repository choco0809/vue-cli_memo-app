import { createRouter, createWebHistory } from 'vue-router'
import ExistingMemoContents from '../view/ExistingMemoContents'
import MemoList from '../view/MemoList'
import NewMemoContents from '../view/NewMemoContents'

const routes = [
  {
    path: '/',
    name: 'memoList',
    component: MemoList
  },
  {
    path: '/edit/:id',
    name: 'memoContents',
    component: ExistingMemoContents,
    props: true
  },
  {
    path: '/new',
    name: 'newMemo',
    component: NewMemoContents
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
