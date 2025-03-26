import type { RouteLocationRaw } from 'vue-router'
import type { Module } from 'vuex'

export interface IAppHeaderBtn {
  label: string
  handleClick: Function
}

export interface IAppHeaderBreadcrumbsItem {
  route?: RouteLocationRaw
  label: string
}

export interface AppHeaderState {
  breadcrumbs: IAppHeaderBreadcrumbsItem[]
  handleBack: null | Function
  title: string
  docs_link: string
  btn: IAppHeaderBtn | null
}

const appHeaderModule: Module<AppHeaderState, unknown> = {
  namespaced: true,
  state: (): AppHeaderState => ({
    breadcrumbs: [],
    handleBack: null,
    title: '',
    docs_link: '',
    btn: null
  }),
  mutations: {
    setBreadcrumbs(state, breadcrumbs: IAppHeaderBreadcrumbsItem[]) {
      state.breadcrumbs = breadcrumbs
    },
    setHandleBack(state, handleBack: Function | null) {
      state.handleBack = handleBack
    },
    setTitle(state, title: string) {
      state.title = title
    },
    setBtn(state, btn: IAppHeaderBtn | null) {
      state.btn = btn
    },
    resetState(state) {
      state.breadcrumbs = []
      state.handleBack = null
      state.title = ''
      state.docs_link = ''
      state.btn = null
    }
  }
}

export default appHeaderModule
