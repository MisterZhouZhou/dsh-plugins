/**
 * Shared browser platform modules. Seeding, bundling externals, and build
 * aliases consume this list so their module identities cannot drift.
 * Mirrors the shell's frozen module table.
 * @module dsh-plugins/shared/web-platform
 */

/** The module specifiers the shell shares into the frozen module table. */
export const PLATFORM_MODULES = [
  'react', 'react/jsx-runtime', 'react-dom', 'react-dom/client', '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-store',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-ui-primitives',
] as const