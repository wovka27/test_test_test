<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

import FormLayout from '@/layouts/FormLayout.vue'

import FormFieldGenerator from '@/components/FormGenerator/FormFieldGenerator.vue'
import type { IFormFieldGeneratorData } from '@/components/FormGenerator/types'

import useAppHeader from '@/composables/app/useAppHeader'

import { message } from '@/utils/message'

import getHandleBackArgs from '@/helpers/getHandleBackArgs'
import { notification } from '@/utils/notification'

const router = useRouter()

const form_data = reactive({
  username: '',
  email: '',
  role: '',
  registered_at: '',
  is_active: false,
  phone: '',
  address: ''
})

const data = reactive<IFormFieldGeneratorData[]>([
  {
    grid: { col: 3, name: 'user-info', col_span: 3 },
    fields: [
      { name: 'username', label: 'Имя пользователя', placeholder: 'Введите имя', type: 'input' },
      { name: 'email', label: 'Email', placeholder: 'Введите email', type: 'input' },
      {
        name: 'role',
        label: 'Роль',
        placeholder: 'Выберите роль',
        type: 'select',
        options: ['Админ', 'Модератор', 'Пользователь']
      },
      { name: 'registered_at', label: 'Дата регистрации', placeholder: 'Выберите дату', type: 'date' },
      { name: 'is_active', label: 'Активен?', type: 'checkbox' }
    ],
    children: [
      {
        grid: { col: 3, col_span: 3, name: 'contact-info', title: 'Контактные данные' },
        fields: [
          { name: 'phone', label: 'Телефон', placeholder: 'Введите телефон', type: 'phone' },
          { name: 'address', label: 'Адрес', placeholder: 'Введите адрес', type: 'input', class: 'span-2' }
        ]
      }
    ]
  }
])

const {
  value: [list_id, detail_id]
} = computed(() => router.currentRoute.value.path.substring(1).split('/'))

useAppHeader({
  title: `Detail demo${detail_id}`,
  breadcrumbs: [
    {
      label: list_id,
      route: getHandleBackArgs(list_id)
    },
    { label: `Detail demo${detail_id}` }
  ]
})

const apply = () => {
  notification({
    title: 'Success',
    message: Object.entries(form_data).reduce<string>((acc, [k, v]) => acc + `${k}: ${v}\n`, ''),
    type: 'success'
  })
}

const cancel = () => {
  Object.assign(form_data, {
    username: '',
    email: '',
    role: '',
    registered_at: '',
    is_active: false,
    phone: '',
    address: ''
  })
}
</script>

<template>
  <FormLayout :cancel="cancel" :apply="apply">
    <PskGridContainer grid-column-count="3">
      <FormFieldGenerator :data="data" v-model="form_data" />
    </PskGridContainer>
  </FormLayout>
</template>
