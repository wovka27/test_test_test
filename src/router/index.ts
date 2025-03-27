import { createRouter, createWebHashHistory } from 'vue-router'

import Demo3EditorView from '@/views/Demo3EditorView.vue'
import Demo3ListView from '@/views/Demo3ListView.vue'
import Demo4EditorView from '@/views/Demo4EditorView.vue'
import Demo4ListView from '@/views/Demo4ListView.vue'
import Demo5EditorView from '@/views/Demo5EditorView.vue'
import Demo5ListView from '@/views/Demo5ListView.vue'
import DemoEditorView from '@/views/DemoEditorView.vue'
import DemoListView from '@/views/DemoListView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/demo-1' },
    { path: '/:catchAll(.*)', redirect: '/' },
    { meta: { layout: 'default' }, path: '/demo-1', name: 'demo-1', component: DemoListView },
    { meta: { layout: 'default' }, path: '/demo-1/:uid', component: DemoEditorView },

    { meta: { layout: 'default' }, path: '/demo-3', name: 'demo-3', component: Demo3ListView },
    { meta: { layout: 'default' }, path: '/demo-3/:uid', component: Demo3EditorView },

    { meta: { layout: 'default' }, path: '/demo-4', name: 'demo-4', component: Demo4ListView },
    { meta: { layout: 'default' }, path: '/demo-4/:uid', component: Demo4EditorView },

    { meta: { layout: 'default' }, path: '/demo-5', name: 'demo-5', component: Demo5ListView },
    { meta: { layout: 'default' }, path: '/demo-5/:uid', component: Demo5EditorView }
  ]
})

export default router
