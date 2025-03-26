<script setup lang="ts">
import { ru } from 'element-plus/es/locale/index.mjs'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

import AppErrors from '@/components/App/AppErrors.vue'
import AppLoader from '@/components/App/AppLoader.vue'
import ModalImage from '@/components/ModalImage.vue'
</script>

<template>
  <el-config-provider :locale="ru">
    <DefaultLayout>
      <router-view></router-view>
    </DefaultLayout>

    <AppLoader />
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
