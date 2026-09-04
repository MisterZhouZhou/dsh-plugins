# dsh-plugins

DSH Web Plugin Collection — community-driven aggregation ecosystem for DeepSeek Harness Web GUI plugins.

Each plugin is an independent Cordis bundle, mounted through `cordis.patch.yml` and profiles. Install from npm or the Workshop, then activate with:

```sh
dsh plugin --profile web add @scope/dsh-<name>
```

## Repository Structure

```
dsh-plugins/
├── packages/          # Plugin packages (one directory per plugin)
│   └── dsh-<name>/
│       ├── src/           # host + client source
│       ├── cordis.patch.yml
│       ├── package.json
│       └── tsdown.config.ts
├── shared/            # Shared build presets and runtime modules
├── scripts/           # Repo maintenance tools
└── docs/              # Documentation
```

## Available Plugins

*Coming soon — add your first plugin with `node scripts/dsh-plugin-new <name>`.*

## Development

```sh
pnpm install
pnpm build
pnpm test
pnpm typecheck

# Create a new plugin scaffold
node scripts/dsh-plugin-new my-feature
```

## License

MIT