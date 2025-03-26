import type { App, InjectionKey } from 'vue'
import { Store, createStore } from 'vuex'

import appHeaderModule from '@/stores/modules/appHeader'
import appStateModule from '@/stores/modules/appState'
import asideMenuModule from '@/stores/modules/asideMenu'
import modalImageModule from '@/stores/modules/modalImage'
import type { IRootState } from '@/stores/types'

const store = createStore<IRootState>({
  modules: {
    appHeader: appHeaderModule,
    appState: appStateModule,
    asideMenu: asideMenuModule,
    modalImage: modalImageModule
  }
})

export const storeKey: InjectionKey<Store<IRootState>> = Symbol('RootStore')

export function setupStore(app: App) {
  app.use(store).provide(storeKey, store)
}

export default store
