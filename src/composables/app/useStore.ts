import { type InjectionKey, inject } from 'vue'
import { Store, useStore as baseUseStore } from 'vuex'

import type { IRootState } from '@/stores/types'

const useStore = <S = IRootState>(injectKey?: InjectionKey<Store<S>> | string): Store<S> => {
  if (injectKey) {
    const store = inject(injectKey)

    if (!store) throw new Error(`Store not provided for key: ${String(injectKey)}`)

    return store as Store<S>
  }

  return baseUseStore<S>()
}

export default useStore
