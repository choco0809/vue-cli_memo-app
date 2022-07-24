import { createRouter, createWebHistory } from 'vue-router'
import MemoContents from '../view/MemoContents'
import NewMemo from '../view/NewMome'

const routes = [
  {
    path: '/edit/:id',
    name: 'memoContents',
    component: MemoContents,
    props: true
  },
  {
    path: '/new',
    name: 'newMemo',
    component: NewMemo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
