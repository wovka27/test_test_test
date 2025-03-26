<script setup lang="ts">

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
        <slot />
      </FormFieldGenerator>
    </PskGridContainer>
  </FormLayout>
</template>
