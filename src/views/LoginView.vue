<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const submit = () => {
  router.push('/demo-1')
}
</script>

<template>
  <div class="AuthView">
    <svg class="AuthView__logo" width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="35" font-family="Arial" font-size="30" fill="black">Test-Admin</text>
      <rect x="164" width="8" height="8" fill="#EC3A39" />
    </svg>

    <form class="AuthView__form" @submit.prevent="submit">
      <h1 class="AuthView__title">Добро пожаловать на тестовый проект</h1>

      <PskButton class="AuthView__btn" native_type="submit" size="large">Войти</PskButton>
    </form>
  </div>
</template>

<style lang="scss">
.AuthView {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.AuthView__logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 205px;
  height: auto;
}

.AuthView__form {
  display: flex;
  width: 360px;
  flex-direction: column;
  align-items: center;
}

.AuthView__form_inputs {
  gap: 30px;
}

.AuthView__title {
  @include setFontStyle1();
  margin-bottom: 20px;
  text-align: center;
}

.AuthView__btn {

}
</style>
