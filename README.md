# mfernandafisio

Single page site for a physiotherapy practice built with Vite, React, and TypeScript.

## Commands

- `yarn dev` - start the development server
- `yarn build` - build for production
- `yarn preview` - preview the production build

## Padrão de Commits

Este projeto utiliza **Conventional Commits** para controle de versão e releases automáticos.

Tipos de commit utilizados:

- `feat:` nova funcionalidade (gera **minor version**)
- `fix:` correção de bug (gera **patch version**)
- `chore:` manutenção/configuração/dependências (não altera versão)

Breaking changes:

- Utilize `!` após o tipo para indicar mudanças incompatíveis  
  Exemplo: `feat!: mudar navegação do site`
- Ou adicione no corpo do commit:  
  `BREAKING CHANGE: descrição da mudança`

Exemplos de commits válidos:

- `feat: adicionar seção de serviços`
- `fix: corrigir header no mobile`
- `chore: ajustar workflow de deploy`
- `feat!: alterar estrutura de navegação`
