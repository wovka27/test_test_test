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
  guest_name: '',
  room_type: '',
  check_in: '',
  check_out: '',
  has_breakfast: false
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
    fields: []
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
    message: Object.entries(form_data).reduce<string>((acc, [k, v]) => acc + `${k}: ${v}`, ''),
    type: 'success'
  })
}

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
  <FormLayout :cancel="cancel" :apply="apply">
    <PskGridContainer grid-column-count="3">
      <FormFieldGenerator :data="data" v-model:formValues="form_data">
        <template #reservation-info_guest_name="{ value, field, updateData }">
          <PskInput :placeholder="field.placeholder" :model-value="value" @update:model-value="updateData" />
        </template>
      </FormFieldGenerator>
    </PskGridContainer>
  </FormLayout>
</template>
