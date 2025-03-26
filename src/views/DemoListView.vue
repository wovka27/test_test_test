<script setup lang="ts">
import TableActionsContainer from '@/components/TableActionsContainer.vue'

import useAppHeader from '@/composables/app/useAppHeader'
import useStore from '@/composables/app/useStore'

import { getMockList } from '@/mock/mockList'

const store = useStore()

useAppHeader(store,{
  title: 'Demo List',
  breadcrumbs: [{ label: 'Demo List' }]
})

const data = getMockList(1)
</script>

<template>
  <div class="ListView">
    <PskTable :data="data">
      <el-table-column label="Название" sortable prop="name" min-width="350px">
        <template #default="scope">
          <PskLink :to="`/demo-1/${scope.row.uid}`">{{ scope.row.name }}</PskLink>
        </template>
      </el-table-column>

      <el-table-column fixed="right" width="85">
        <template #default="scope">
          <TableActionsContainer>
            <PskLink small-font-weight :to="`/demo-1/${scope.row.uid}`">Изменить</PskLink>
          </TableActionsContainer>
        </template>
      </el-table-column>
    </PskTable>
  </div>
</template>
