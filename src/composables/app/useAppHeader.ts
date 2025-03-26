import useStore from '@/composables/app/useStore'

import type { IAppHeaderBreadcrumbsItem } from '@/stores/modules/appHeader'

export interface IHeaderParams {
  title?: string
  breadcrumbs: IAppHeaderBreadcrumbsItem[]
  handleBack?: Function | null
  btn?: any
  optionalCallback?: (app_header_state: any) => void
}

export default (params: IHeaderParams) => {
  const store = useStore()

  store.commit('appHeader/setTitle', params.title ?? '')
  store.commit('appHeader/setBreadcrumbs', params.breadcrumbs)
  store.commit('appHeader/setHandleBack', params.handleBack ?? null)
  store.commit('appHeader/setBtn', params.btn ?? null)

  params.optionalCallback?.(store)
}
