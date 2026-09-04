# AGENTS.md — Package-level rules (packages/)

This layer supplements the root [AGENTS.md](../AGENTS.md) with package-level constraints.
Every plugin package under `packages/` must follow these rules.

## Package Shape

- **Independent cordis bundle**: `"type": "module"`, node `^22.19 || >=24`,
  `"dsh": { "bundle": { "patch": "./cordis.patch.yml" } }` declares bundle activation;
  `dsh.client` declares the browser half injection with `platform: "web"`.
- **Host / client separation**: `src/index.ts` is the host half (runs in DSH host process),
  `src/client/` is the browser half (Web GUI side), `src/core/` is shared pure logic
  (compiled by both sides).
- **Exports**: `.` (host), `./client` (browser), `./src/*` (test references),
  `./package.json`.

## SDK & Build Constraints

- **Official NPM SDK only**: Types from `@deepseek-ai/*` devDependencies (node_modules
  resolution); peerDependencies declare runtime services. No tsconfig paths pointing
  to any DSH source checkout.
- **Shared build preset**: All tsdown packages import `shared/tsdown.client.ts`.
  Do not copy it into a package.
- **Browser bundle purity**: `@deepseek-ai/*` value imports are type-only; value
  imports are allowed only for platform seed table members (react / cordis /
  ui-slots / ui-primitives, see `shared/web-platform.ts`). Cross-plugin
  collaboration goes through cordis services (`ctx.slots` / `ctx.sessions`) or
  slots, never through value imports.
- **Styles**: CSS Modules (`*.module.css`) compiled by lightningcss into the bundle.

## Testing

- Each package must have `vitest run` passing tests (`pnpm test`).
- `tests/` directory for test files; test files must not depend on a DSH source checkout.

## Bilingual Requirement

- Plugin package READMEs: `README.md` (English) + `README.zh.md` (Chinese) +
  `README.i18n.yaml` (pairing metadata).

## Package-level AGENTS.md

- Packages with cross-directory rules or complex build chains may include their own
  `AGENTS.md`. Keep it package-specific; do not repeat this file or the root file.