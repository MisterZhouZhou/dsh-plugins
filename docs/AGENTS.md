# Documentation Rules

## Structure

- `docs/` — long-lived documentation about the repository, project, and ecosystem.
- `packages/dsh-<name>/docs/` — package-specific documentation.
- `packages/dsh-<name>/README.md` — plugin English documentation.
- `packages/dsh-<name>/README.zh.md` — plugin Chinese documentation.
- `packages/dsh-<name>/README.i18n.yaml` — pairing metadata.

## Writing Rules

- Document every plugin feature and configuration option.
- README files must exist in both English and Chinese.
- `README.i18n.yaml` records the pairing metadata (last sync timestamp).
- Keep documentation close to the code it describes.
- Update documentation when behavior changes.