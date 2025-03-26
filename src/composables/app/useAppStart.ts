import { onBeforeMount } from 'vue'

import useStore from '@/composables/app/useStore'

import { sleep } from '@/utils/sleep'

export default () => {
  const store = useStore()

  onBeforeMount(async () => {
    try {
      await sleep(1000)
      store.commit('appState/setIsReady', true)
    } catch (error) {
      store.commit('appState/setErrorList', [{ title: 'App Start error' }])
    }
  })
}
