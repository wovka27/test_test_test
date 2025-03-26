import type { Module } from 'vuex'

import packageJson from '../../../package.json'

export interface IAppError {
  title: string
  description?: string[]
}

export interface AppState {
  app_version: string
  is_ready: boolean
  error_list: IAppError[]
  getIsStateBeforeEqualAfter: null | (() => boolean)
  is_app_start_screen_show: boolean
  is_loading: number
}

const appStateModule: Module<AppState, unknown> = {
  namespaced: true,
  state: (): AppState => ({
    app_version: packageJson.version,
    is_ready: false,
    error_list: [],
    getIsStateBeforeEqualAfter: null,
    is_app_start_screen_show: true,
    is_loading: 0
  }),
  mutations: {
    setIsLoading(state, flag: boolean) {
      state.is_loading = flag ? ++state.is_loading : --state.is_loading
    },
    setIsReady(state, val?: boolean) {
      state.is_ready = !!val
    },
    setErrorList(state, errors: IAppError[]) {
      state.error_list.push(...errors)
    },
    setIsStateBeforeEqualAfter(state, fn: (() => boolean) | null) {
      state.getIsStateBeforeEqualAfter = fn
    },
    setIsAppStartScreenShow(state, val: boolean) {
      state.is_app_start_screen_show = val
    },
    resetState(state) {
      state.is_ready = true
      state.error_list = []
      state.getIsStateBeforeEqualAfter = null
      state.is_app_start_screen_show = false
    }
  }
}

export default appStateModule
