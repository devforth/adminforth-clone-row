import { AdminForthPlugin } from "adminforth";
import type { IAdminForth, IHttpServer, AdminForthResourceColumn, AdminForthResource, IAdminForthHttpResponse, AdminUser, AdminForthComponentDeclaration } from "adminforth";
import type { PluginOptions } from './types.js';


export default class  extends AdminForthPlugin {
  options: PluginOptions;

  constructor(options: PluginOptions) {
    super(options, import.meta.url);
    this.options = options;
  }

  async modifyResourceConfig(adminforth: IAdminForth, resourceConfig: AdminForthResource) {
    super.modifyResourceConfig(adminforth, resourceConfig);
  
    if ( !resourceConfig.options.pageInjections ) {
      resourceConfig.options.pageInjections = {};
    }
    if ( !resourceConfig.options.pageInjections.list ) {
      resourceConfig.options.pageInjections.list = {};
    }
    if ( !resourceConfig.options.pageInjections.list.customActionIcons ) {
      resourceConfig.options.pageInjections.list.customActionIcons = [];
    }
    (resourceConfig.options.pageInjections.list.customActionIcons as AdminForthComponentDeclaration[]).push(
      { file: this.componentPath('CloneRowButton.vue'), meta: { pluginInstanceId: this.pluginInstanceId, resourceId: this.resourceConfig.resourceId } }
    );

    // simply modify resourceConfig or adminforth.config. You can get access to plugin options via this.options;
  }
  
  validateConfigAfterDiscover(adminforth: IAdminForth, resourceConfig: AdminForthResource) {
    // optional method where you can safely check field types after database discovery was performed
  }

  instanceUniqueRepresentation(pluginOptions: any) : string {
    // optional method to return unique string representation of plugin instance. 
    // Needed if plugin can have multiple instances on one resource 
    return `${this.resourceConfig.resourceId}-clone-row`;
  }
}