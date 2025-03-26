import { useRouter } from 'vue-router'

import useStore from '@/composables/app/useStore'

import initRestApiConfig from '@/utils/initRestApiConfig'

export default async (): Promise<boolean> => {
  const router = useRouter()
  const store = useStore()

  return initRestApiConfig(store, router)
}
