import { createRouter, createWebHistory } from 'vue-router'

import Demo3EditorView from '@/views/Demo3EditorView.vue'
import Demo3ListView from '@/views/Demo3ListView.vue'
import Demo4EditorView from '@/views/Demo4EditorView.vue'
import Demo4ListView from '@/views/Demo4ListView.vue'
import Demo5EditorView from '@/views/Demo5EditorView.vue'
import Demo5ListView from '@/views/Demo5ListView.vue'
import DemoEditorView from '@/views/DemoEditorView.vue'
import DemoListView from '@/views/DemoListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/demo-1' },
    { path: '/:catchAll(.*)', redirect: '/' },
    { path: '/demo-1', name: 'demo-1', component: DemoListView },
    { path: '/demo-1/:uid', component: DemoEditorView },

    { path: '/demo-3', name: 'demo-3', component: Demo3ListView },
    { path: '/demo-3/:uid', component: Demo3EditorView },

    { path: '/demo-4', name: 'demo-4', component: Demo4ListView },
    { path: '/demo-4/:uid', component: Demo4EditorView },

    { path: '/demo-5', name: 'demo-5', component: Demo5ListView },
    { path: '/demo-5/:uid', component: Demo5EditorView }
  ]
})

export default router
