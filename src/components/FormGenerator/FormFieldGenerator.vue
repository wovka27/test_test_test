<script setup lang="ts">
import { computed } from 'vue'

import type { FormData, FormField, IFormFieldGeneratorData } from '@/components/FormGenerator/types'
import PskDate from '@/components/UI/PskDate.vue'
import PskInput from '@/components/UI/PskInput.vue'
import PskSelect from '@/components/UI/PskSelect.vue'
import PskStringList from '@/components/UI/PskStringList.vue'
import PskSwitch from '@/components/UI/PskSwitch.vue'

interface IFormFieldGeneratorProps {
  /**
   *
   * объект с описанием полей формы (label, атрибуты и другие необходимые параметры)
   */
  data: IFormFieldGeneratorData[]
  /**
   *
   * объект для хранения значений полей формы, реализованный через v-model
   */
  formValues: FormData
}

const props = defineProps<IFormFieldGeneratorProps>()
const emit = defineEmits<{ (event: 'update:formValues', value: FormData): void }>()

const form_data = computed({
  get: () => props.formValues,
  set: (v: FormData): void => emit('update:formValues', v)
})

const getComponent = (field_type: FormField['type']) => {
  switch (field_type) {
    case 'checkbox':
      return PskSwitch
    case 'textarea':
      return PskInput
    case 'select':
      return PskSelect
    case 'date':
      return PskDate
    case 'string-list':
      return PskStringList
    default:
      return PskInput
  }
}

const updateData = (key: string, value: unknown) => {
  emit('update:formValues', { ...form_data, [key]: value })
}

</script>

<template>
  <PskGridContainer
    v-for="(item, i) in data"
    :key="i"
    :grid-column-count="item.grid.col"
    :grid-span="item.grid.col_span"
    :title="item.grid.title"
  >
    <slot
      v-for="(field, idx) in item.fields"
      :field="field"
      :value="form_data[field.name]"
      :name="`${item.grid.name}_${field.name}`"
      :updateData="updateData"
      :key="idx"
    >
      <component :is="getComponent(field.type)" v-bind="field" v-model="form_data[field.name]" :id="field.name" />
    </slot>
    <FormFieldGenerator v-if="item.children?.length" :form-values="formValues" :data="item.children" />
  </PskGridContainer>
</template>
