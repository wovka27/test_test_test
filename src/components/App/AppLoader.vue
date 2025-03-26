<script lang="ts" setup>
import useStore from '@/composables/app/useStore'

const store = useStore()
</script>

<template>
  <div class="AppLoader" v-if="store.state.appState.is_loading">
    <PskLoader />
  </div>
</template>

<style lang="scss">
.AppLoader {
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9997 !important;

  background: $c_body_disable;
}
</style>
