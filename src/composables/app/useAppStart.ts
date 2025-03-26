import { onBeforeMount } from 'vue'

import useAuth from '@/composables/app/useAuth'
import useStore from '@/composables/app/useStore'

import { sleep } from '@/utils/sleep'

export default () => {
  const store = useStore()

  onBeforeMount(async () => {
    try {
      await sleep(1000)
      await useAuth()
      store.commit('appState/setIsReady', true)
    } catch (error) {
      store.commit('appState/setErrorList', [{ title: 'App Start error' }])
    }
  })
}
