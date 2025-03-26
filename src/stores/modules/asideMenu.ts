import type { Module } from 'vuex'

import { aside_menu } from '@/mock/asideMenu'

export type MenuType = IMenuParent | IMenuItem

export interface IMenuParent {
  title: string
  children: IMenuItem[]
  has_underline: string
  slug: string
}

export interface IMenuItem {
  title: string
  slug: string
  has_underline?: string
}

export interface AsideMenuState {
  is_aside_menu_open: boolean
  aside_menu: MenuType[]
}

const asideMenuModule: Module<AsideMenuState, unknown> = {
  namespaced: true,
  state: (): AsideMenuState => ({ is_aside_menu_open: true, aside_menu }),
  mutations: {
    toggleAsideMenu(state, isOpen: boolean) {
      state.is_aside_menu_open = isOpen
    },
    setAsideMenu(state, menu: MenuType[]) {
      state.aside_menu = menu
    },
    resetState(state) {
      state.is_aside_menu_open = true
      state.aside_menu = []
    }
  }
}

export default asideMenuModule
