<script lang="ts" setup>
import IconArrow from '@/components/Icons/IconArrow.vue'

import useStore from '@/composables/app/useStore'

const store = useStore()
</script>

<template>
  <header class="AppHeader">
    <div class="AppHeader__row">
      <div class="AppHeader__breadcrumbs">
        <el-breadcrumb :separator-icon="IconArrow">
          <el-breadcrumb-item v-for="link of store.state.appHeader.breadcrumbs" :to="link.route" :key="link.label">
            {{ link.label }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="AppHeader__row">
      <div class="AppHeader__title">
        <PskLink
          to=""
          class="AppHeader__linkBack"
          v-if="store.state.appHeader.handleBack"
          @click="store.state.appHeader.handleBack"
        >
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 4.5H11.5C11.646 4.5 11.7658 4.54683 11.8595 4.6405C11.9532 4.73417 12 4.854 12 5C12 5.146 11.9532 5.26583 11.8595 5.3595C11.7658 5.45317 11.646 5.5 11.5 5.5H1.5C1.354 5.5 1.23417 5.45317 1.1405 5.3595C1.04683 5.26583 1 5.146 1 5C1 4.854 1.04683 4.73417 1.1405 4.6405C1.23417 4.54683 1.354 4.5 1.5 4.5ZM1.703 5L5.8595 9.1405C5.95317 9.24483 6 9.36467 6 9.5C6 9.63533 5.9505 9.7525 5.8515 9.8515C5.7525 9.9505 5.63533 10 5.5 10C5.36467 10 5.24483 9.95317 5.1405 9.8595L0.6405 5.3595C0.546833 5.25517 0.5 5.13533 0.5 5C0.5 4.86467 0.546833 4.74483 0.6405 4.6405L5.1405 0.1405C5.24483 0.0468334 5.36467 0 5.5 0C5.63533 0 5.7525 0.0495 5.8515 0.1485C5.9505 0.2475 6 0.364667 6 0.5C6 0.635333 5.95317 0.755167 5.8595 0.8595L1.703 5Z"
              fill="#409eff"
            />
          </svg>
          Назад
        </PskLink>
        <i v-if="store.state.appHeader.handleBack" class="AppHeader__line"></i>
        <span>{{ store.state.appHeader.title }}</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.AppHeader {
  width: 100%;
  padding: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.AppHeader__line {
  width: 2px;
  height: 70%;
  background-color: #81818180;
}

.AppHeader__row {
  display: flex;
  justify-content: space-between;
}

.AppHeader__docLink {
  background-color: $c_body;
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid $c_border_light;
  transition: transform 0.1s ease-in-out;

  &.hidden {
    transform: scale(0);
  }
}

.AppHeader__addBtn {
  transition: transform 0.1s ease-in-out;

  &.hidden {
    transform: scale(0);
  }
}

.AppHeader__title {
  @include setFontStyle1();

  display: flex;
  align-items: center;
  gap: 10px;
}

.AppHeader__linkBack {
  position: relative;
  top: 2px;
}
</style>
