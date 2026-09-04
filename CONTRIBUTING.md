# Contributing to dsh-plugins

Thank you for contributing to the DSH Web Plugin Collection.

## Getting Started

1. Fork the repository and clone it locally.
2. Install dependencies: `pnpm install`
3. Create a new branch: `git checkout -b feat/my-feature`

## Creating a New Plugin

```sh
node scripts/dsh-plugin-new <name>
```

This scaffolds a complete plugin skeleton under `packages/dsh-<name>/` with:
- Host entry (`src/index.ts` with `apply` + `Config` schema)
- Browser client entry (`src/client/index.ts`)
- `cordis.patch.yml` bundle declaration
- `package.json` with correct `dsh` manifest fields
- TypeScript and build configuration using the shared preset

## Development Workflow

```sh
pnpm typecheck     # Type-check all packages
pnpm test          # Run all tests
pnpm build         # Build all packages
pnpm dev:watch     # Watch and rebuild browser bundles
```

## Commit Convention

Use Conventional Commits:
- `feat(scope): description` — new feature
- `fix(scope): description` — bug fix
- `docs: description` — documentation only
- `test: description` — adding or updating tests
- `refactor: description` — code refactoring
- `chore: description` — maintenance tasks

## Pull Request Checklist

- [ ] TypeScript compiles without errors: `pnpm typecheck`
- [ ] All tests pass: `pnpm test`
- [ ] Build succeeds: `pnpm build`
- [ ] Documentation is updated (README.md + README.zh.md)
- [ ] Changes are focused and self-contained

## Package Structure Rules

Each plugin package must:
- Use `dsh-` prefix in its name
- Include `dsh.bundle.patch` pointing to `cordis.patch.yml`
- Include `dsh.client` with `platform: "web"` for browser UI plugins
- Use `shared/tsdown.client.ts` for the build configuration
- Keep host and client code separated: `src/index.ts` (host), `src/client/` (browser)
- Export `.` (host), `./client` (browser), `./src/*` (test references)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.