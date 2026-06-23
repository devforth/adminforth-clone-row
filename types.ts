import  {type PluginsCommonOptions } from "adminforth";

export interface PluginOptions extends PluginsCommonOptions {
  /**
   * When `true`, the Clone button is displayed as a standalone quick-action icon
   * directly in the row actions area (next to buttons like Approve).
   * When `false` (default), the Clone option appears inside the three-dots dropdown menu.
   */
  makeCloneButtonAsQuickAction?: boolean;
}
