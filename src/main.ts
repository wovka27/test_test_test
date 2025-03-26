import { createApp } from 'vue'

import { setupStore } from '@/stores'

import App from './App.vue'
import components_global from './components/global-components'
import { directives } from './directives'
import router from './router'

const app = createApp(App)

components_global.forEach((item) => app.component(item.__name, item))
directives.forEach((i) => app.directive(...i))

setupStore(app)

app.use(router).mount('#app')
