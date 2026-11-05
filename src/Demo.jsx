import React from "react";
import { ArrowUpRight, ArrowRight } from "./Icons.jsx";
import image_prado from "../assets/prado.webp";

const SectorImage = ({ name: e, alt: t }) => (
  <img src={image_prado} alt={t} width={1400} height={1e3} />
);
const ServiceExamples = [
  {
    name: `Estratégia`,
    title: `Clareza para decidir. Espaço para crescer.`,
    body: `Uma leitura organizada do cenário, das prioridades e dos caminhos possíveis para o seu negócio.`,
    list: [
      `Diagnóstico de contexto`,
      `Mapa de prioridades`,
      `Plano de próximos passos`,
    ],
  },
  {
    name: `Contabilidade`,
    title: `Os números também contam uma história.`,
    body: `Um conceito de atendimento que aproxima informações, rotina e decisões. Tudo começa com uma boa conversa.`,
    list: [
      `Organização de informações`,
      `Visão da rotina financeira`,
      `Definição de escopo`,
    ],
  },
  {
    name: `Jurídico`,
    title: `Cada contexto merece atenção.`,
    body: `Uma jornada de apresentação de demandas e organização de documentos, sem substituir a avaliação de um profissional habilitado.`,
    list: [
      `Entendimento da demanda`,
      `Documentos e contexto`,
      `Encaminhamento profissional`,
    ],
  },
  {
    name: `Engenharia`,
    title: `Da primeira pergunta à direção do projeto.`,
    body: `Um ponto de partida para alinhar objetivos, restrições e expectativas antes de definir o escopo técnico.`,
    list: [
      `Briefing do projeto`,
      `Requisitos iniciais`,
      `Etapas de planejamento`,
    ],
  },
];
function PradoDemo() {
  let [activeServiceIndex, setActiveServiceIndex] = React.useState(0),
    [diagnosticSimulated, setDiagnosticSimulated] = React.useState(!1),
    o = ServiceExamples[activeServiceIndex];
  return (
    <div className={`pr-root`} id={`demo-top`}>
      <nav className={`pr-nav`} aria-label={`Navegação Prado`}>
        <a className={`pr-logo`} href={`#demo-top`}>
          prado<span>{` /`}</span>
        </a>
        <a href={`#pr-expertise`}>Áreas de atuação</a>
        <a href={`#pr-method`}>
          {`Nossa abordagem `}
          <ArrowUpRight size={15} />
        </a>
      </nav>
      <section className={`pr-hero`}>
        <div className={`pr-hero-copy`}>
          <p className={`pr-kicker`}>PERSPECTIVA. CRITÉRIO. DIREÇÃO.</p>
          <h1>
            Boas decisões
            <br />
            começam com
            <br />
            <em>um novo olhar.</em>
          </h1>
          <p>
            Conhecimento próximo. Conversas relevantes.
            <br />
            Um conceito de assessoria para o próximo capítulo.
          </p>
          <a className={`pr-cta`} href={`#pr-expertise`}>
            {`Encontre sua perspectiva `}
            <ArrowUpRight size={18} />
          </a>
          <span className={`pr-index`}>
            PRADO / SERVIÇOS PROFISSIONAIS / CONCEITO
          </span>
        </div>
        <div className={`pr-image`}>
          <SectorImage
            name={`prado`}
            alt={`Arquitetura de escritório com luz natural, conceito visual Prado`}
          />
          <div>
            <span>
              O essencial é<br />
              entender primeiro.
            </span>
            <ArrowUpRight size={32} />
          </div>
        </div>
      </section>
      <section className={`pr-expertise`} id={`pr-expertise`}>
        <div className={`pr-section-head`}>
          <p className={`pr-kicker`}>01 / DIFERENTES OLHARES</p>
          <h2>
            Qual é o seu
            <br />
            <em>próximo desafio?</em>
          </h2>
        </div>
        <div>
          <div
            className={`pr-tabs`}
            role={`group`}
            aria-label={`Escolher área de interesse`}
          >
            {ServiceExamples.map((n, i) => (
              <button
                key={n.name}
                aria-pressed={i === activeServiceIndex}
                onClick={() => {
                  (setActiveServiceIndex(i), setDiagnosticSimulated(!1));
                }}
              >
                {n.name}
              </button>
            ))}
          </div>
          <article className={`pr-expertise-detail`} aria-live={`polite`}>
            <span>
              0{activeServiceIndex + 1}
              {` / `}
              {o.name.toUpperCase()}
            </span>
            <h3>{o.title}</h3>
            <p>{o.body}</p>
            <ul>
              {o.list.map((e) => (
                <li key={e}>
                  <ArrowRight size={14} />
                  {e}
                </li>
              ))}
            </ul>
            <button
              className={`pr-text-button`}
              onClick={() => setDiagnosticSimulated(!diagnosticSimulated)}
            >
              {diagnosticSimulated
                ? `Limpar interesse`
                : `Explorar esta conversa`}
              {` `}
              <ArrowUpRight size={17} />
            </button>
            <p className={`pr-feedback`} role={`status`}>
              {diagnosticSimulated
                ? `Interesse em ${o.name.toLowerCase()} selecionado. Esta demonstração não envia uma solicitação.`
                : `Selecione uma área para conhecer a jornada.`}
            </p>
          </article>
        </div>
      </section>
      <section className={`pr-method`} id={`pr-method`}>
        <p className={`pr-kicker`}>02 / UMA ABORDAGEM SIMPLES</p>
        <h2>
          Antes da resposta,
          <br />a pergunta certa.
        </h2>
        <div>
          {[
            [`Escutar`, `Entender o momento e o que realmente precisa mudar.`],
            [
              `Organizar`,
              `Dar forma às informações e definir um escopo claro.`,
            ],
            [`Orientar`, `Apresentar caminhos para uma decisão consciente.`],
          ].map(([e, t], n) => (
            <article key={e}>
              <span>0{n + 1}</span>
              <h3>{e}</h3>
              <p>{t}</p>
            </article>
          ))}
        </div>
        <small>
          Marca e serviços conceituais. Sem prestação de consultoria ou
          indicação de habilitação profissional.
        </small>
      </section>
    </div>
  );
}

export default PradoDemo;
