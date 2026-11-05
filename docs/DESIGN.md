---
name: "Prado"
description: "Sistema visual implementado — Serviços profissionais"
colors:
  primary: "#1e3e51"
  text: "#193649"
  background: "#f4f1e9"
  surface: "#e8ece7"
  dark-surface: "#1c3849"
  accent: "#708378"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(48px, 5.6vw, 78px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-3px"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    lineHeight: 1.6
---

# Design System: Prado

## Overview

Consultoria de caráter editorial e sóbrio. Azul profundo, creme e verde acinzentado articulam títulos serifados, fotografia e índices de conteúdo.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/prado). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Azul profundo organiza texto, ação e aba ativa. Verde claro agrupa especialidades, enquanto a seção de método inverte para fundo escuro e texto claro. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Georgia aplica-se aos títulos do modelo; corpo e navegação usam DM Sans. O título principal passa a (58px) até (1000px), mantido no móvel. Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero em duas colunas; especialidades em duas e método em três. Até (1000px), reduzem-se lacunas. Até (760px), todas passam a uma coluna, o segundo link de navegação é ocultado e a fotografia usa altura mínima de (370px).

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

Uma nota se sobrepõe à fotografia, sem sombra. A separação das demais áreas depende de tons e bordas finas.

## Shapes

Planos retangulares para foto, nota e ação; filtros em pílulas (30px). Índices e linhas reforçam a organização. A imagem conceitual está em [`assets/prado.webp`](../assets/prado.webp); preservar seu recorte definido pelo CSS.

## Components

- Serviços: filtros com `aria-pressed` trocam o artigo anunciado por `aria-live="polite"`; aba ativa usa fundo azul e texto branco.
- Diagnóstico: ação de texto alterna mensagem demonstrativa; trocar serviço limpa a confirmação.
- Método: três etapas numeradas, separadas por linha superior.
- Estados compartilhados: Controles da demonstração usam o foco global rosa (3px), afastado (5px). A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Manter títulos serifados e a estrutura editorial de índices e etapas.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Apresentar o diagnóstico simulado como contato enviado ou alterar a identidade para um painel de software.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
