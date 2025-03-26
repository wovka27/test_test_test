<script setup lang="ts">
import { ElCheckbox } from 'element-plus'

import type { FormData, FormField, IFormFieldGeneratorData } from '@/components/FormGenerator/types'
import PskDate from '@/components/UI/PskDate.vue'
import PskInput from '@/components/UI/PskInput.vue'
import PskSelect from '@/components/UI/PskSelect.vue'
import PskStringList from '@/components/UI/PskStringList.vue'

interface IFormFieldGeneratorProps {
  /**
   *
   * объект с описанием полей формы (label, атрибуты и другие необходимые параметры)
   */
  data: IFormFieldGeneratorData[]
}

defineProps<IFormFieldGeneratorProps>()

const form_data = defineModel<FormData>({ default: {} })

const getComponent = (field_type: FormField['type']) => {
  switch (field_type) {
    case 'checkbox':
      return ElCheckbox
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
</script>

<template>
  <PskGridContainer
    v-for="(item, i) in data"
    :key="i"
    :grid-column-count="item.grid.col"
    :grid-span="item.grid.col_span"
    :title="item.grid.title"
  >
    <slot v-for="(field, idx) in item.fields" :field="field" :name="`${item.grid.name}_${field.name}`" :key="idx">
      <component :is="getComponent(field.type)" v-bind="field" v-model="form_data[field.name]" />
    </slot>
    <FormFieldGenerator v-if="item.children?.length" v-model="form_data" :data="item.children" />
  </PskGridContainer>
</template>
