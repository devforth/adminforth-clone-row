<template>
    <Tooltip>
        <RouterLink :to="{
            name: `resource-create`,
            params: { resourceId: props.meta.resourceId }, 
            query: { 
                values: save_btoa(JSON.stringify(redirectToCreatePage())),
            }
        }">
            <IconFileCloneOutline class="w-5 h-5 me-2"/>
        </RouterLink>
        <template v-slot:tooltip>
            {{ $t('Clone record') }}
        </template>
    </Tooltip>
</template>

<script lang="ts" setup>
import { Tooltip } from '@/afcl';
import { AdminUser, type AdminForthResourceCommon } from '@/types';
import { IconFileCloneOutline } from '@iconify-prerendered/vue-flowbite';
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
        dataToFill[field.name] = props.record[field.name];
    }
    return dataToFill;
}

function save_btoa(str) {
  return btoa(str);
}
</script>