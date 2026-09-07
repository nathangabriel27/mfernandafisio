Instruções do projeto `mfernandafisio`

Você está trabalhando no repositório `/Users/nathanoliveiradev/Code/mfernandafisio`.

## Objetivo e tecnologia

Site institucional de fisioterapia, feito como SPA estática com:

- React 19
- TypeScript
- Vite 7
- Yarn
- GitHub Actions
- GitHub Pages com domínio próprio

Os conteúdos principais ficam em `src/data/site.ts`. Os componentes visuais ficam em `src/components/`.

## Comandos

```bash
yarn dev
yarn lint
yarn build
yarn preview
```

Antes de concluir uma correção, execute ao menos:

```bash
yarn lint
yarn build
```

## Regras de código

- Não usar `switch`.
- Usar `const` em vez de `let` quando não houver reatribuição.
- Faça somente as alterações solicitadas; não modifique itens sem relação com a tarefa.
- Preserve o estilo e a estrutura atuais do projeto.
- Não altere o fluxo de deploy, domínio ou configurações de GitHub Actions, a menos que isso seja solicitado explicitamente.

## Estrutura relevante

```text
src/
  data/site.ts                 Conteúdo textual, contatos, serviços e dados do site
  components/
    Header/                    Cabeçalho e navegação
    Hero/                      Seção inicial
    About/                     Seção sobre a profissional
    Services/                  Serviços
    Testimonials/              Depoimentos
    Contact/                   Contato
    Footer/                    Rodapé e versão publicada
    FloatingWhatsApp/          Botão flutuante de WhatsApp
  assets/                      Imagens do site
  App.tsx                      Composição da página
```

## Publicação

O deploy usa `.github/workflows/deploy.yml`.

- O site é compilado com `yarn build`.
- Os arquivos finais são gerados em `dist/`.
- O GitHub Pages publica o conteúdo de `dist/`.
- A publicação é acionada por tags no formato `vX.Y.Z`, como `v1.0.3`.
- O workflow também pode ser iniciado manualmente em GitHub Actions.
- O domínio próprio é configurado em **GitHub → Settings → Pages**, não está versionado no repositório.
- Como há domínio próprio, a configuração atual do Vite sem `base` customizado é adequada.

O workflow injeta a versão e a data da publicação no rodapé via:

```text
VITE_SITE_VERSION
VITE_SITE_UPDATED_AT
```

## Fluxo Git

```text
branch de trabalho → develop → production → PR de release → tag → deploy
```

Para uma correção:

1. Parta de `develop`.
2. Crie uma branch descritiva, por exemplo `fix/corrigir-whatsapp`.
3. Faça as alterações e valide com lint/build.
4. Use commits convencionais:
   - `fix:` para correções
   - `feat:` para funcionalidades
   - `chore:` para manutenção/configuração
5. Envie a branch e abra PR para `develop`.
6. Depois da validação, `develop` é integrada em `production`.
7. O Release Please cria/atualiza uma PR de release; após o merge dela, é criada uma versão/tag.

Não faça push direto em `production`.

## Estado importante

As branches locais `develop` e `production` podem estar desatualizadas em relação ao remoto. Antes de iniciar trabalho, atualize `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b fix/nome-da-correcao
```

Agora aguarde a lista de correções do usuário e implemente somente o que for solicitado.