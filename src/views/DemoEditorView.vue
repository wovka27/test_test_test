<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

import FormLayout from '@/layouts/FormLayout.vue'

import FormFieldGenerator from '@/components/FormGenerator/FormFieldGenerator.vue'
import type { IFormFieldGeneratorData } from '@/components/FormGenerator/types'

import useAppHeader from '@/composables/app/useAppHeader'

import { message } from '@/utils/message'
import { notification } from '@/utils/notification'

import getHandleBackArgs from '@/helpers/getHandleBackArgs'

const router = useRouter()

const form_data = reactive({
  name: '',
  last_name: '',
  middle_name: '',
  updated_at: '',
  is_work: '',
  name1: '',
  last_name1: '',
  middle_name1: '',
  updated_at1: '',
  is_work1: ''
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
    grid: { col: 2, col_span: 2, name: 'c_2', title: 'Какой-то заголовок' },
    fields: [
      { name: 'name1', label: 'имя', placeholder: 'Введите имя', type: 'input' },
      { name: 'last_name1', label: 'Отчество', placeholder: 'Введите отчество', type: 'input' },
      { name: 'middle_name1', label: 'Фамилия', placeholder: 'Введите фамилию', type: 'input' },
      { name: 'updated_at1', label: 'Дата обновления', placeholder: 'Выберите дату', type: 'date' },
      { name: 'is_work1', label: 'Работает?', type: 'checkbox' }
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
    name: '',
    last_name: '',
    middle_name: '',
    updated_at: '',
    is_work: '',
    name1: '',
    last_name1: '',
    middle_name1: '',
    updated_at1: '',
    is_work1: ''
  })
}
</script>

<template>
  <FormLayout :cancel="cancel" :apply="apply">
    <PskGridContainer grid-column-count="3">
      <FormFieldGenerator :data="data" v-model="form_data">
        <template #c_1_name="{ field }">
          <PskInput :label="field.label" :placeholder="field.placeholder" v-model="form_data.name" />
        </template>
      </FormFieldGenerator>
    </PskGridContainer>
  </FormLayout>
</template>
