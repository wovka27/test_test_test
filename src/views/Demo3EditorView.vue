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
  order_number: '',
  customer_name: '',
  delivery_date: '',
  status: '',
  is_paid: false,
  payment_method: '',
  transaction_id: ''
})

const data = reactive<IFormFieldGeneratorData[]>([
  {
    grid: { col: 3, name: 'order-details', col_span: 3 },
    fields: [
      { name: 'order_number', label: 'Номер заказа', placeholder: 'Введите номер', type: 'input' },
      { name: 'customer_name', label: 'Клиент', placeholder: 'Введите имя клиента', type: 'input' },
      { name: 'delivery_date', label: 'Дата доставки', placeholder: 'Выберите дату', type: 'date' },
      {
        name: 'status',
        label: 'Статус',
        placeholder: 'Выберите статус',
        type: 'select',
        options: ['В обработке', 'Отправлен', 'Доставлен']
      },
      { name: 'is_paid', label: 'Оплачен?', type: 'checkbox' }
    ],
    children: [
      {
        grid: { col: 2, col_span: 3, name: 'payment-details', title: 'Оплата' },
        fields: [
          {
            name: 'payment_method',
            label: 'Способ оплаты',
            placeholder: 'Выберите способ',
            type: 'select',
            options: ['Карта', 'Наличные', 'Криптовалюта']
          },
          { name: 'transaction_id', label: 'ID транзакции', placeholder: 'Введите номер', type: 'input' }
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
  console.log(form_data)
  notification({
    title: 'Success',
    message: Object.entries(form_data).reduce<string>((acc, [k, v]) => acc + `${k}: ${v}`, ''),
    type: 'success'
  })
}

const cancel = () => {
  Object.assign(form_data, {
    order_number: '',
    customer_name: '',
    delivery_date: '',
    status: '',
    is_paid: false,
    payment_method: '',
    transaction_id: ''
  })
}
</script>

<template>
  <FormLayout :cancel="cancel" :apply="apply">
    <PskGridContainer grid-column-count="3">
      <FormFieldGenerator :data="data" v-model:formValues="form_data" />
    </PskGridContainer>
  </FormLayout>
</template>
