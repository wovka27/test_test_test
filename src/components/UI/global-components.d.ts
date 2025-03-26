import CollapseHOC from '@/components/UI/CollapseHOC.vue'
import PskAlert from '@/components/UI/PskAlert.vue'
import PskButton from '@/components/UI/PskButton.vue'
import PskCascader from '@/components/UI/PskCascader.vue'
import PskCheckList from '@/components/UI/PskCheckList.vue'
import PskDate from '@/components/UI/PskDate.vue'
import PskDrawer from '@/components/UI/PskDrawer.vue'
import PskGridContainer from '@/components/UI/PskGridContainer.vue'
import PskInfoCollapse from '@/components/UI/PskInfoCollapse.vue'
import PskInput from '@/components/UI/PskInput.vue'
import PskInputRange from '@/components/UI/PskInputRange.vue'
import PskLink from '@/components/UI/PskLink.vue'
import PskMapField from '@/components/UI/PskMapField.vue'
import PskMultiString from '@/components/UI/PskMultiString.vue'
import PskSelect from '@/components/UI/PskSelect.vue'
import PskStringList from '@/components/UI/PskStringList.vue'
import PskSwitch from '@/components/UI/PskSwitch.vue'
import PskTabSelect from '@/components/UI/PskTabSelect.vue'
import PskTable from '@/components/UI/PskTable.vue'
import PskTableTdName from '@/components/UI/PskTableTdName.vue'
import PskTabs from '@/components/UI/PskTabs.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PskSelect: typeof PskSelect
    PskInput: typeof PskInput
    PskDrawer: typeof PskDrawer
    PskDate: typeof PskDate
    PskCheckList: typeof PskCheckList
    PskStringList: typeof PskStringList
    PskButton: typeof PskButton
    PskLink: typeof PskLink
    PskTable: typeof PskTable
    PskTabs: typeof PskTabs
    PskTabSelect: typeof PskTabSelect
    PskSwitch: typeof PskSwitch
    PskCascader: typeof PskCascader
    PskMultiString: typeof PskMultiString
    PskInputRange: typeof PskInputRange
    PskMapField: typeof PskMapField
    PskAlert: typeof PskAlert
    CollapseHOC: typeof CollapseHOC
    PskInfoCollapse: typeof PskInfoCollapse
    PskTableTdName: typeof PskTableTdName
    PskGridContainer: typeof PskGridContainer
  }
}
