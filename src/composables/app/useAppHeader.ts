import useStore from '@/composables/app/useStore'

import type { IAppHeaderBreadcrumbsItem, IAppHeaderBtn } from '@/stores/modules/appHeader'

export interface IHeaderParams {
  title?: string
  breadcrumbs: IAppHeaderBreadcrumbsItem[]
  handleBack?: Function | null
  btn?: IAppHeaderBtn
  optionalCallback?: (app_header_state: any) => void
}

export default (store: ReturnType<typeof useStore>, params: IHeaderParams) => {
  store.commit('appHeader/setTitle', params.title ?? '')
  store.commit('appHeader/setBreadcrumbs', params.breadcrumbs)
  store.commit('appHeader/setHandleBack', params.handleBack ?? null)
  store.commit('appHeader/setBtn', params.btn ?? null)

  params.optionalCallback?.(store)
}
