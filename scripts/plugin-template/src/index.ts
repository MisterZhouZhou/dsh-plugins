/**
 * Host loader entry for the __NAME__ plugin — runs in the DSH host process.
 *
 * The host half is a cordis plugin loaded from the profile composition via
 * the row in cordis.patch.yml (id dsh-__NAME__). Most GUI plugins have no host
 * behavior beyond a system-prompt announcement. The actual UI lives in the
 * browser half (src/client/index.ts).
 */
import type { Context } from '@deepseek-ai/cordis'

export const name = 'dsh-__NAME__'

export interface Config {
  enabled?: boolean
}

export const Config: import('schemastery').default<Config> = (
  require('schemastery').default.object({
    enabled: require('schemastery').default.boolean().default(true),
  })
)

export function apply(ctx: Context, config?: Config): void {
  // TODO(__NAME__): host-side behavior, e.g.
  //   ctx.systemPrompt.section({ name: 'plugin:__NAME__', order: 200, text: '...' })
  // A pure browser plugin needs nothing here.
}