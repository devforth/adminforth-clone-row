<template>
  <RouterLink 
    class="flex px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
    :to="{
      name: `resource-create`,
      params: { resourceId: props.meta.resourceId }, 
      query: { 
          values: save_btoa(JSON.stringify(redirectToCreatePage())),
      }
    }">
    <IconFileCloneSolid class="w-5 h-5 me-2 text-lightPrimary dark:text-darkPrimary"/>
    {{ $t('Clone record') }}
  </RouterLink>
</template>

<script lang="ts" setup>
import { Tooltip } from '@/afcl';
import { AdminUser, type AdminForthResourceCommon } from '@/types';
import { IconFileCloneSolid } from '@iconify-prerendered/vue-flowbite';
import { useI18n } from 'vue-i18n';
 
const { t } = useI18n();

const props = defineProps<{
    meta: any,
    resource: AdminForthResourceCommon,
    adminUser: AdminUser,
    record: any,
    updateRecords: Function,
}>();

function redirectToCreatePage() {
    const fieldsToFill = { ...props.resource.columns.filter((col: any) => col.showIn.create === true) }
    let dataToFill = {};
    for (const field of Object.values(fieldsToFill)) {
        if (field.foreignResource) {
            dataToFill[field.name] = props.record[field.name]?.pk
            continue;   
        }
        dataToFill[field.name] = props.record[field.name];
    }
    return dataToFill;
} 

function save_btoa(str) {
  const cleaned = str.replace(/\uFEFF/g, '');
  return btoa(cleaned);
}
</script>