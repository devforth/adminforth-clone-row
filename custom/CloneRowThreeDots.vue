<template>
  <DropdownMenuItem
    :class="['af-clone-row-menu-item', THREE_DOTS_MENU_ITEM_CLASSES]"
    :to="cloneRoute(props.meta.resourceId, props.resource, props.record)"
  >
    <template #icon><IconCopy /></template>
    {{ $t('Clone record') }}
  </DropdownMenuItem>
</template>

<script lang="ts" setup>
import { DropdownMenuItem } from '@/afcl';
import { type AdminUser, type AdminForthResourceCommon } from '@/types/Common';
import { THREE_DOTS_MENU_ITEM_CLASSES } from '@/utils/threeDotsMenu';
import { IconCopy } from '@iconify-prerendered/vue-lucide';
import { cloneRoute } from './cloneRoute';

const props = defineProps<{
    meta: any,
    resource: AdminForthResourceCommon,
    adminUser: AdminUser,
    record: any,
    updateRecords: Function,
}>();
</script>
