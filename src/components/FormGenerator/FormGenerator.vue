<script setup lang="ts">
import FormLayout from '@/layouts/FormLayout.vue'

import FormFieldGenerator from '@/components/FormGenerator/FormFieldGenerator.vue'
import type { FormData, IFormFieldGeneratorData } from '@/components/FormGenerator/types'

interface IFormGeneratorProps {
  cancel: () => void
  apply: () => void
  data: IFormFieldGeneratorData[]
}

defineProps<IFormGeneratorProps>()
const form_data = defineModel<FormData>({ default: {} })
</script>

<template>
  <FormLayout :cancel="cancel" :apply="apply">
    <PskGridContainer grid-column-count="3">
      <FormFieldGenerator :data="data" v-model="form_data">
        <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
          <slot :name="slotName" v-bind="slotProps" />
        </template>
      </FormFieldGenerator>
    </PskGridContainer>
  </FormLayout>
</template>
