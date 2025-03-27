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
  back_route_name: 'demo-3',
  fetchGetEntity: fetchGetData,
  getRequestData: () => ({ ...form_data }),
  setFormData: (formData) => {
    Object.assign(form_data, formData['3'])
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
  <FormGenerator v-if="is_data_loaded" :data="data" v-model="form_data" :cancel="cancel" :apply="apply" />
</template>
