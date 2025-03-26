import type { Module } from 'vuex'

export interface ModalImageState {
  is_open: boolean
  image_url: string
}

const modalImageModule: Module<ModalImageState, unknown> = {
  namespaced: true,
  state: (): ModalImageState => ({
    is_open: false,
    image_url: ''
  }),
  mutations: {
    openModal(state, img_url: string) {
      state.image_url = img_url
      state.is_open = true
    },
    closeModal(state) {
      state.image_url = ''
      state.is_open = false
    },
  }
}

export default modalImageModule
