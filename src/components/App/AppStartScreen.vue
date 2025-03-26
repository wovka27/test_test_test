<script lang="ts" setup>
import { watch } from 'vue'

import useStore from '@/composables/app/useStore'

const store = useStore()

watch(
  () => store.state.appState.is_ready,
  (val) => {
    if (val) {
      setTimeout(() => {
        store.commit('appState/setIsAppStartScreenShow', false)
      }, 500)

      return
    }

    store.commit('appState/setIsAppStartScreenShow', true)
  }
)
</script>

<template>
  <div
    v-if="store.state.appState.is_app_start_screen_show"
    class="AppStartScreen"
    :class="{ AppStartScreen_hidden: store.state.appState.is_ready }"
  >
    <div class="AppStartScreen__content">
      <span class="AppStartScreen__version">{{ store.state.appState.app_version }}</span>
      <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="35" font-family="Arial" font-size="30" fill="#000">Test-Admin</text>
        <rect x="164" width="8" height="8" fill="#EC3A39" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
.AppStartScreen {
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $c_body;

  z-index: 9998;
}

.AppStartScreen__version {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #1a1a1a;
  font-size: 1vmin;
}

.AppStartScreen_hidden {
  animation: AppStartScreen_hidden 500ms ease-in-out;
  transform: translateX(100%);
}

.AppStartScreen__content {
  svg {
    //transform: scale(1.8);
    height: auto;
    width: 30vmin;

    rect {
      animation: rect 500ms ease-in-out;
      animation-iteration-count: infinite;
      -moz-animation-iteration-count: infinite;
      -webkit-animation-iteration-count: infinite;
      -o-animation-iteration-count: infinite;
    }
  }
}

@keyframes rect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes AppStartScreen_hidden {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}

.AppStartScreen__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.AppStartScreen__h1 {
  @include setFontStyle1();
  color: $c_primary;
}
</style>
