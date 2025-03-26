import type { AppHeaderState } from '@/stores/modules/appHeader'
import type { AppState } from '@/stores/modules/appState'
import type { AsideMenuState } from '@/stores/modules/asideMenu'
import type { ModalImageState } from '@/stores/modules/modalImage'

export interface IRootState {
  appHeader: AppHeaderState
  asideMenu: AsideMenuState
  modalImage: ModalImageState
  appState: AppState
}
