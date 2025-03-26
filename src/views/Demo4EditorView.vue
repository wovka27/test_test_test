<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

import FormGenerator from '@/components/FormGenerator/FormGenerator.vue'
import type { IFormFieldGeneratorData } from '@/components/FormGenerator/types'

import useEditorView from '@/composables/app/useEditorView'

import { fetchGetData } from '@/services/REST/test/data'

import { notification } from '@/utils/notification'

import getBackArgs from '@/helpers/getBackArgs'

const router = useRouter()

const { is_data_loaded, apply } = useEditorView({
  router,
  apply: {
    update: {
      fetchUpdateEntity: async () => {
        notification({
          title: 'Success',
          message: Object.entries(form_data).reduce<string>((acc, [k, v]) => acc + `${k}: ${v}\n`, ''),
          type: 'success'
        })
      }
    }
  },
  back_route_name: 'demo-4',
  fetchGetEntity: async () => await fetchGetData(),
  getRequestData: () => ({ ...form_data }),
  setFormData: (formData) => {
    Object.assign(form_data, formData['4'])
  },
  mount: {
    common: {
      app_header_props: (response) => ({
        title: `Detail demo${detail_id}`,
        breadcrumbs: [
          {
            label: list_id,
            route: getBackArgs(list_id)
          },
          { label: `Detail demo${detail_id}` }
        ]
      })
    }
  }
})

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
  <FormGenerator v-if="is_data_loaded" :data="data" v-model="form_data" :cancel="cancel" :apply="apply" />
</template>
