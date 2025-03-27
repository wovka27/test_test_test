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
  back_route_name: 'demo-5',
  fetchGetEntity: fetchGetData,
  getRequestData: () => ({ ...form_data }),
  setFormData: (formData) => {
    Object.assign(form_data, formData['5'])
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
  guest_name: '',
  room_type: '',
  check_in: '',
  check_out: '',
  has_breakfast: false,
  guest_name1: '',
  room_type1: '',
  check_in1: '',
  check_out1: '',
  has_breakfast1: false
})

const data = reactive<IFormFieldGeneratorData[]>([
  {
    grid: { col: 4, name: 'reservation-info', col_span: 3 },
    fields: [
      { name: 'guest_name', label: 'Имя гостя', placeholder: 'Введите имя', type: 'input' },
      {
        name: 'room_type',
        label: 'Тип номера',
        placeholder: 'Выберите тип',
        type: 'select',
        options: ['Стандарт', 'Люкс', 'Семейный']
      },
      { name: 'check_in', label: 'Дата заезда', placeholder: 'Выберите дату', type: 'date' },
      { name: 'check_out', label: 'Дата выезда', placeholder: 'Выберите дату', type: 'date' },
      { name: 'has_breakfast', label: 'Завтрак включен?', type: 'checkbox' }
    ]
  },
  {
    grid: { col: 2, col_span: 3, name: 'payment-info', title: 'Оплата' },
    fields: [
      { name: 'guest_name1', label: 'Имя гостя', placeholder: 'Введите имя', type: 'input' },
      {
        name: 'room_type1',
        label: 'Тип номера',
        placeholder: 'Выберите тип',
        type: 'select',
        options: ['Стандарт', 'Люкс', 'Семейный']
      },
      { name: 'check_in1', label: 'Дата заезда', placeholder: 'Выберите дату', type: 'date' },
      { name: 'check_out1', label: 'Дата выезда', placeholder: 'Выберите дату', type: 'date' },
      { name: 'has_breakfast1', label: 'Завтрак включен?', type: 'checkbox' }
    ]
  }
])

const {
  value: [list_id, detail_id]
} = computed(() => router.currentRoute.value.path.substring(1).split('/'))

const cancel = () => {
  Object.assign(form_data, {
    guest_name: '',
    room_type: '',
    check_in: '',
    check_out: '',
    has_breakfast: false
  })
}
</script>

<template>
  <FormGenerator v-if="is_data_loaded" :data="data" v-model="form_data" :cancel="cancel" :apply="apply" />
</template>
