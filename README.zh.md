# dsh-plugins

DSH Web 插件集合 — DeepSeek Harness Web GUI 的社区驱动聚合生态。

每个插件都是独立的 Cordis bundle，通过 `cordis.patch.yml` 和 profile 挂载。从 npm 或 Workshop 安装后激活：

```sh
dsh plugin --profile web add @scope/dsh-<name>
```

## 仓库结构

```
dsh-plugins/
├── packages/          # 插件包（每个插件一个目录）
│   └── dsh-<name>/
│       ├── src/           # host + client 源码
│       ├── cordis.patch.yml
│       ├── package.json
│       └── tsdown.config.ts
├── shared/            # 共享构建预设和运行时模块
├── scripts/           # 仓库维护工具
└── docs/              # 文档
```

## 可用插件

*即将推出 — 使用 `node scripts/dsh-plugin-new <name>` 添加你的第一个插件。*

## 开发

```sh
pnpm install
pnpm build
pnpm test
pnpm typecheck

# 创建新插件骨架
node scripts/dsh-plugin-new my-feature
```

## 许可证

MIT