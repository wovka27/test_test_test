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
  back_route_name: 'demo-1',
  fetchGetEntity: fetchGetData,
  getRequestData: () => ({ ...form_data }),
  setFormData: (formData) => {
    Object.assign(form_data, formData['1'])
  },
  mount: {
    common: {
      app_header_props: () => ({
        title: `${list_id}-test${detail_id}`,
        breadcrumbs: [
          {
            label: list_id,
            route: getBackArgs(list_id)
          },
          { label: `${list_id}-test${detail_id}` }
        ]
      })
    }
  }
})

const form_data = reactive({
  name: '',
  last_name: '',
  middle_name: '',
  updated_at: '',
  is_work: false,
  name1: '',
  last_name1: '',
  middle_name1: '',
  updated_at1: '',
  is_work1: false,
  name11: '',
  last_name11: '',
  middle_name11: '',
  updated_at11: '',
  is_work11: false
})

const data = reactive<IFormFieldGeneratorData[]>([
  {
    grid: { col: 3, name: 'c_1', col_span: 3 },
    fields: [
      { name: 'name', label: 'имя', placeholder: 'Введите имя' },
      { name: 'last_name', label: 'Отчество', placeholder: 'Введите отчество', type: 'input' },
      { name: 'middle_name', label: 'Фамилия', placeholder: 'Введите фамилию', type: 'input' },
      { name: 'updated_at', label: 'Дата обновления', placeholder: 'Выберите дату', type: 'date' },
      { name: 'is_work', label: 'Работает?', type: 'checkbox' }
    ]
  },
  {
    grid: { col: 2, col_span: 3, name: 'c_2', title: 'Какой-то заголовок' },
    fields: [
      { name: 'name1', label: 'имя', placeholder: 'Введите имя', type: 'input' },
      { name: 'last_name1', label: 'Отчество', placeholder: 'Введите отчество', type: 'input' },
      { name: 'middle_name1', label: 'Фамилия', placeholder: 'Введите фамилию', type: 'input' },
      { name: 'updated_at1', label: 'Дата обновления', placeholder: 'Выберите дату', type: 'date' },
      { name: 'is_work1', label: 'Работает?', type: 'checkbox', class: 'span-2' }
    ],
    children: [
      {
        grid: { col: 3, col_span: 1, name: 'c_22', title: 'Еще какой-то заголовок' },
        fields: [
          { name: 'name11', label: 'имя', placeholder: 'Введите имя', type: 'input' },
          { name: 'last_name11', label: 'Отчество', placeholder: 'Введите отчество', type: 'input' },
          { name: 'middle_name11', label: 'Фамилия', placeholder: 'Введите фамилию', type: 'input' },
          { name: 'updated_at11', label: 'Дата обновления', placeholder: 'Выберите дату', type: 'date' },
          { name: 'is_work11', label: 'Работает?', type: 'checkbox' }
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
    name: '',
    last_name: '',
    middle_name: '',
    updated_at: '',
    is_work: false,
    name1: '',
    last_name1: '',
    middle_name1: '',
    updated_at1: '',
    is_work1: false,
    name11: '',
    last_name11: '',
    middle_name11: '',
    updated_at11: '',
    is_work11: false
  })
}
</script>

<template>
  <FormGenerator v-if="is_data_loaded" :data="data" v-model="form_data" :cancel="cancel" :apply="apply" />
</template>
