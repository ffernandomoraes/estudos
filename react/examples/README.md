```
├─ .vscode/
│   └─ settings.json
├─ docker/
│   ├─ prod/
│   └─ dev/                      
├─ docs/                         # Documentação
├─ public/
├─ scripts/
├─ src/
│   ├─ assets/                  # Imagens, fontes, estilos globais, temas
│   ├─ components/              # Componentes compartilhados
│   │   └─ Example/
│   │       └─ index.tsx
│   ├─ declarations/            # Declarações e alterações de tipagem
│   │   └─ extra.d.ts
│   ├─ helpers/                 # Valores e funções padrões do app
│   │   ├─ consts.ts
│   │   ├─ enums.ts
│   │   └─ functions.ts
│   ├─ hooks/                   # Hooks personalizados
│   │   └─ useCustomHook.ts
│   ├─ interfaces/
│   │   └─ User/
│   │       └─ index.ts
│   ├─ pages/
│   │   ├─ private/             # Páginas privadas
│   │   │   ├─ Dashboard/
│   │   │   │   └ index.tsx
│   │   │   └─ index.tsx        # Arquivo de rotas privadas e lógicas de segurança
│   │   ├─ public/              # Páginas publicas
│   │   │   └─ Auth/
│   │   │       └─ index.tsx
│   │   └─ routes.tsx           # Arquivo de rotas públicas
│   ├─ services/
│   │   ├─ User/
│   │   │   └─ index.ts
│   │   └─ Service.ts           # Arquivo base que possuem helpers para outras services
│   ├─ tests/
│   ├─ App.tsx
│   ├─ index.tsx
│   └─ settings.ts              # Arquivo manipulador de variaveis de ambiente
├─ .editorconfig
├─ .env.development
├─ .env.production
├─ .eslintignore
├─ .eslintrc
├─ .gitignore
├─ .prettierrc.js
├─ package.json
├─ README.md
└─ tsconfig.json
```
