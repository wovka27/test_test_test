<script setup lang="ts">
import useStore from '@/composables/app/useStore'

const store = useStore()
</script>

<template>
  <el-dialog class="ModalImage" v-model="store.state.modalImage.is_open" @closed="store.commit('modalImage/closeModal')">
    <div class="ModalImage__content">
      <img class="ModalImage__img" :src="store.state.modalImage.image_url" alt="picture" />
    </div>
  </el-dialog>
</template>

<style lang="scss">
.ModalImage {
  width: 90vw;
}

.ModalImage__content {
  width: 100%;
  height: 85vh;
}

.ModalImage__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
