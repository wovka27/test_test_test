<script setup lang="ts">
import { ru } from 'element-plus/es/locale/index.mjs'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

import AppErrors from '@/components/App/AppErrors.vue'
import AppLoader from '@/components/App/AppLoader.vue'
import AppStartScreen from '@/components/App/AppStartScreen.vue'
import ModalImage from '@/components/ModalImage.vue'

import useAppStart from '@/composables/app/useAppStart'
import useStore from '@/composables/app/useStore'

const route = useRoute()
const store = useStore()

useAppStart()

const layout = computed(() => {
  switch (route.meta.layout) {
    default:
      return DefaultLayout
  }
})
</script>

<template>
  <el-config-provider :locale="ru">
    <template v-if="store.state.appState.is_ready">
      <component v-if="$route.meta.layout" :is="layout">
        <router-view></router-view>
      </component>

      <router-view v-else></router-view>
    </template>

    <AppLoader />
    <AppStartScreen />
    <AppErrors />
    <ModalImage />
  </el-config-provider>
</template>

<style lang="scss">
@import '@/assets/styles/index.scss';

#app {
  height: 100vh;
  overflow: auto;
}
</style>
