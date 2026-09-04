/**
 * Browser client entry for the __NAME__ plugin.
 *
 * This module runs in the Web GUI (browser) and is bundled as lib/client.js.
 * It is loaded by the DSH module loader when the plugin is activated.
 * Use ctx.slots, ctx.settings, ctx.locale and other cordis services
 * to integrate with the Web GUI.
 */
import type { Context } from '@deepseek-ai/cordis'

export function apply(ctx: Context): void {
  // TODO(__NAME__): browser-side UI behavior, e.g.
  //   ctx.slots.mount('conversation-header', /* React component */)
}