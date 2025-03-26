import { onBeforeMount } from 'vue'

import useStore from '@/composables/app/useStore'

export default () => {
  const store = useStore()

  onBeforeMount(async () => {
    try {
      store.commit('appState/setIsReady', true)
    } catch (error) {
      store.commit('appState/setErrorList', [{ title: 'App Start error' }])
    }
  })
}
