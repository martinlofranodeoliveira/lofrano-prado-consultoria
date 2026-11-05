# Critérios do modelo Prado

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **prado-01** — No grupo “Escolher área de interesse”, clicar Contabilidade.
  Resultado: Contabilidade recebe aria-pressed=true. O painel aria-live=polite mostra Os números também contam uma história. e a lista Organização de informações, Visão da rotina financeira, Definição de escopo.
- **prado-02** — Com Contabilidade ativa, clicar “Explorar esta conversa”; depois “Limpar interesse”.
  Resultado: O status passa a “Interesse em contabilidade selecionado. Esta demonstração não envia uma solicitação.” e o button a Limpar interesse. O segundo clique volta ao status inicial e ao button Explorar esta conversa.
- **prado-03** — Selecionar interesse e depois clicar Jurídico.
  Resultado: O painel passa a Cada contexto merece atenção. e à lista Entendimento da demanda, Documentos e contexto, Encaminhamento profissional. A troca limpa o interesse anterior e restaura o status inicial.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
