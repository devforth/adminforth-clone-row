import type { RouteLocationRaw } from 'vue-router';
import type { AdminForthResourceCommon } from '@/types/Common';
import { btoa_function } from '@/utils';

// create page of the resource with the form prefilled by the values of the record
export function cloneRoute(resourceId: string, resource: AdminForthResourceCommon, record: Record<string, any>): RouteLocationRaw {
  const values: Record<string, any> = {};
  for (const column of resource.columns.filter((c) => c.showIn?.create)) {
    values[column.name] = column.foreignResource ? record[column.name]?.pk : record[column.name];
  }
  return {
    name: 'resource-create',
    params: { resourceId },
    query: { values: btoa_function(JSON.stringify(values)) },
  };
}
