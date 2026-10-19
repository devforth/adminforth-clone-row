<template>
  <Tooltip>
    <LinkButton
      class="af-clone-row-button"
      :to="cloneRoute(props.meta.resourceId, props.resource, props.record)"
      variant="ghost"
      size="sm"
      iconOnly
    >
      <IconCopy />
    </LinkButton>
    <template v-slot:tooltip>
      {{ $t('Clone record') }}
    </template>
  </Tooltip>
</template>

<script lang="ts" setup>
import { LinkButton, Tooltip } from '@/afcl';
import { type AdminUser, type AdminForthResourceCommon } from '@/types/Common';
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
