# Arquitetura

Arquitetura de pastas e arquivos base.

## Design

```
.git/
.vscode/
└ settings.json
docker/
    └─ prod/
    └─ dev/
docs/
public/
└ index.html
scripts/
src/
└─ assets/
└─ components/
    └─ Example/
        └ index.ts
└─ declarations/
    └ extra.d.ts
└─ helpers/
    └ consts.ts
    └ enums.ts
    └ functions.ts
└─ hooks/
    └ useCustomHook.ts
└─ interfaces/
    └─ Example/
        └ index.ts
└─ pages/
    └─ private/
        └─ Example/
            └ index.ts
        └ index.tsx
    └─ public/
        └─ Example/
            └ index.ts
        └ index.tsx
    └ routes.tsx
└─ services/
    └─ Example/
        └ index.ts
    └ Service.ts
└─ tests/
└ App.tsx
└ index.tsx
└ settings.ts
.editorconfig
.env.development
.env.production
.eslintignore
.eslintrc
.gitignore
.prettierrc.js
package.json
README.md
tsconfig.json
```
