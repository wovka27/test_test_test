import type { Router } from 'vue-router'

import type useStore from '@/composables/app/useStore'

import RestApi from '@/services/REST/utils/RestApi'

export default async (store: ReturnType<typeof useStore>, router: Router) => {
  new RestApi('dom_admin', {
    url_api: '',
    url_refresh: '',
    token: '',
    cbPreFetch: () => {
      store.commit('appState/setIsLoading', true)
    },
    cbPostFetch: () => {
      store.commit('appState/setIsLoading', false)
    },
    cbHandlerErrorResponse: async (error: any, controller) => {
      if (JSON.stringify(error) === '{}') {
        store.commit('appState/setIsLoading', false)
        store.commit('appState/setIsAppStartScreenShow', false)
        store.commit('appState/setErrorList', [{ title: 'Что-то пошло не так...', description: [error] }])
        controller?.abort()
        return
      }

      let title: string = ''
      let description: string[] = []

      for (const [k, v] of Object.entries(error)) {
        if (k === ('message' || 'error') && typeof v === 'string') title = v

        if (v && typeof v === 'object')
          description = Object.values(v)
            .filter((i) => Array.isArray(i) && typeof i[0] === 'string')
            .map((i) => i[0])
      }

      store.commit('appState/setErrorList', [{ title, description }])
    },
    cbHandlerErrorRefreshToken: async () => {
      await router.replace('/login')
    }
  })

  return true
}
