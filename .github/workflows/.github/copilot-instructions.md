# Copilot instructions — mfernandafisio

## Idioma e tom
- Escreva TODOS os comentários e sugestões em português do Brasil (pt-BR).
- Seja direto e prático. Use bullets quando ajudar.
- Evite jargões desnecessários. Explique rapidamente o porquê quando sugerir mudanças.

## Objetivo do projeto
- Site single-page para fisioterapia, feito em React + Vite + TypeScript.
- Prioridades: responsividade mobile, acessibilidade, performance, SEO básico e manutenção simples.
- Código deve ser fácil de entender (projeto com foco didático e apenas 1 pessoa mantendo).

## O que priorizar nas revisões (ordem)
1. Bugs e comportamentos quebrados (scroll, navegação, estado do menu, tema dark/light).
2. Acessibilidade (contraste, foco de teclado, aria-label, botão hamburger, links).
3. Performance (evitar re-renderizações, memoização quando fizer sentido, evitar work desnecessário).
4. Responsividade (header fixo no mobile, espaçamentos, layouts fluidos).
5. Consistência e manutenção (componentes simples e reutilizáveis, tipagens centralizadas em `src/types` quando aplicável).
6. Organização e qualidade de código (nomeação, pequenas refatorações com benefício claro).

## O que NÃO fazer (evitar ruído)
- Não sugerir refatorações grandes sem ganho claro.
- Não criar estruturas complexas tipo atoms/molecules/organisms.
  - Preferir `src/components/<Componente>/` com subcomponentes internos quando necessário.
- Não trocar aspas simples por aspas duplas.
- Não sugerir bibliotecas novas sem necessidade (a menos que resolva um problema real).
- Não pedir testes unitários agora, a menos que seja algo crítico (fase de aprendizado e site simples).

## Padrões do código (preferências)
- TypeScript com tipagens explícitas onde importa (props, retornos, dados do site).
- Componentes funcionais, hooks, e uso de `React.memo`/`useMemo`/`useCallback` apenas quando houver motivo claro.
- CSS: manter legível e consistente (evitar micro-otimizações ou mudanças puramente estéticas sem contexto).
- Manter links e ações de contato funcionando (WhatsApp flutuante e Instagram).

## UX/visual
- Layout deve ser “refinado e amigável”, não formal.
- Dark mode não deve ser preto puro; usar tons de cinza/pretos suaves.
- Garantir que imagens usem `object-fit: contain` quando indicado e não distorçam.

## Deploy
- Considerar que o site publica no GitHub Pages com domínio customizado.
- Se sugerir algo que afete build/deploy, explicar impacto no workflow e no Pages.