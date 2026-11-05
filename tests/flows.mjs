const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "prado-01 — apresenta a área de Contabilidade",
    run: async ({ ui, user, assert, within }) => {
      const areas = within(
        ui.getByRole("group", { name: "Escolher área de interesse" }),
      );
      await user.click(
        areas.getByRole("button", { name: "Contabilidade", exact: true }),
      );
      assert.equal(
        areas
          .getByRole("button", { name: "Contabilidade", exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      const panel = ui
        .getByRole("heading", {
          name: "Os números também contam uma história.",
          exact: true,
        })
        .closest("article");
      assert.equal(panel.getAttribute("aria-live"), "polite");
      for (const item of [
        "Organização de informações",
        "Visão da rotina financeira",
        "Definição de escopo",
      ]) {
        assert.ok(within(panel).getByText(item, { exact: true }));
      }
    },
  },
  {
    name: "prado-02 — seleciona e limpa o interesse em Contabilidade",
    run: async ({ ui, user, assert }) => {
      await user.click(
        ui.getByRole("button", { name: "Contabilidade", exact: true }),
      );
      await user.click(
        ui.getByRole("button", { name: "Explorar esta conversa" }),
      );
      assert.equal(
        text(ui.getByRole("status")),
        "Interesse em contabilidade selecionado. Esta demonstração não envia uma solicitação.",
      );
      await user.click(ui.getByRole("button", { name: "Limpar interesse" }));
      assert.equal(
        text(ui.getByRole("status")),
        "Selecione uma área para conhecer a jornada.",
      );
      assert.ok(ui.getByRole("button", { name: "Explorar esta conversa" }));
      assert.equal(
        ui.queryByRole("button", { name: "Limpar interesse" }),
        null,
      );
    },
  },
  {
    name: "prado-03 — limpa o interesse ao mudar para Jurídico",
    run: async ({ ui, user, assert, within }) => {
      await user.click(
        ui.getByRole("button", { name: "Explorar esta conversa" }),
      );
      assert.ok(ui.getByRole("button", { name: "Limpar interesse" }));
      await user.click(
        ui.getByRole("button", { name: "Jurídico", exact: true }),
      );
      const panel = ui
        .getByRole("heading", {
          name: "Cada contexto merece atenção.",
          exact: true,
        })
        .closest("article");
      for (const item of [
        "Entendimento da demanda",
        "Documentos e contexto",
        "Encaminhamento profissional",
      ]) {
        assert.ok(within(panel).getByText(item, { exact: true }));
      }
      assert.equal(
        text(ui.getByRole("status")),
        "Selecione uma área para conhecer a jornada.",
      );
      assert.ok(ui.getByRole("button", { name: "Explorar esta conversa" }));
    },
  },
];
