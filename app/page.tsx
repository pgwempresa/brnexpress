"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Boxes,
  Building2,
  ClipboardCheck,
  FileText,
  MapPinned,
  PackageCheck,
  Route,
  SearchCheck,
  ShieldCheck,
  ShoppingCart,
  Snowflake,
  Star,
  Store,
  Truck,
  Zap,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/5561998266953?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20BRN%20Express%20e%20quero%20solicitar%20uma%20cota%C3%A7%C3%A3o.";

const navItems = [
  ["Início", "#inicio"],
  ["Serviços", "#servicos"],
  ["Sobre", "#sobre"],
  ["Diferenciais", "#diferenciais"],
  ["Projetos", "#projetos"],
  ["FAQ", "#faq"],
  ["Contato", "#contato"],
];

const authorityItems = [
  "Entregas expressas",
  "Produtos refrigerados",
  "Transporte farmacêutico",
  "E-commerce",
  "Cargas fracionadas",
  "Rotas empresariais",
  "Tocantins, Brasília e Goiânia",
];

const services = [
  {
    title: "Transporte farmacêutico",
    copy: "Operação dedicada para cargas sensíveis, com cuidado no manuseio e previsibilidade no trajeto.",
    benefit: "Mais segurança para produtos de alto valor e exigência.",
    image: "/brand/service-farmaceutico.jpg",
    Icon: PackageCheck,
  },
  {
    title: "Produtos refrigerados",
    copy: "Soluções para cargas que exigem controle, acondicionamento adequado e atenção em cada etapa.",
    benefit: "Preservação da integridade até a entrega.",
    image: "/brand/service-refrigerado.jpg",
    Icon: Snowflake,
  },
  {
    title: "E-commerce e encomendas",
    copy: "Coletas, distribuição e entregas expressas para empresas que precisam girar pedidos com agilidade.",
    benefit: "Cliente final atendido com rapidez e rastreabilidade operacional.",
    image: "/brand/service-ecommerce.jpg",
    Icon: ShoppingCart,
  },
  {
    title: "Entrega rápida",
    copy: "Atendimento para demandas urgentes, documentos, malotes e cargas leves com prioridade de execução.",
    benefit: "Menos espera entre coleta e destino.",
    image: "/brand/service-entrega-rapida.jpg",
    Icon: Zap,
  },
  {
    title: "Cargas fracionadas",
    copy: "Transporte sob medida para volumes variados, otimizando rotas sem abrir mão do cuidado.",
    benefit: "Eficiência de custo para remessas recorrentes.",
    image: "/brand/service-carga-fracionada.jpg",
    Icon: Boxes,
  },
  {
    title: "Rotas empresariais",
    copy: "Planejamento de coletas e entregas para operações comerciais com frequência definida.",
    benefit: "Mais previsibilidade para sua rotina logística.",
    image: "/brand/service-rotas.jpg",
    Icon: Route,
  },
];

const differences = [
  ["Especialização", "Atuação com farmacêuticos, e-commerce e refrigerados."],
  ["Rotas estratégicas", "Presença operacional em Tocantins, Brasília e Goiânia."],
  ["Atendimento direto", "Cotação e alinhamento com quem entende da operação."],
  ["Cuidado com a carga", "Processo pensado para reduzir riscos no manuseio."],
  ["Agilidade comercial", "Resposta objetiva para demandas expressas e programadas."],
  ["Operação recorrente", "Soluções para empresas que dependem de frequência."],
];

const projects = [
  {
    title: "Distribuição para saúde",
    copy: "Transporte com atenção redobrada para produtos farmacêuticos, insumos e cargas sensíveis.",
    bullets: ["Manuseio criterioso", "Coletas programadas", "Acompanhamento comercial"],
    image: "/brand/service-farmaceutico.jpg",
  },
  {
    title: "Fluxo para e-commerce",
    copy: "Apoio logístico para lojas, sellers e operações que precisam cumprir prazos de entrega.",
    bullets: ["Entregas expressas", "Roteirização por demanda", "Suporte a picos de pedido"],
    image: "/brand/service-ecommerce.jpg",
  },
  {
    title: "Carga refrigerada",
    copy: "Soluções para mercadorias que precisam de acondicionamento adequado e operação disciplinada.",
    bullets: ["Cuidado térmico", "Planejamento de rota", "Entrega com responsabilidade"],
    image: "/brand/service-refrigerado.jpg",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Entendimento da necessidade",
    copy: "Analisamos origem, destino, prazo, volume e exigências da carga.",
    Icon: SearchCheck,
  },
  {
    number: "2",
    title: "Diagnóstico logístico",
    copy: "Avaliamos rota, tipo de veículo, manuseio e prioridade da entrega.",
    Icon: ClipboardCheck,
  },
  {
    number: "3",
    title: "Cotação objetiva",
    copy: "Você recebe uma proposta clara para aprovar sem complicação.",
    Icon: FileText,
  },
  {
    number: "4",
    title: "Coleta programada",
    copy: "Organizamos a retirada com conferência e cuidado operacional.",
    Icon: PackageCheck,
  },
  {
    number: "5",
    title: "Transporte monitorado",
    copy: "A carga segue a rota planejada com comunicação durante a operação.",
    Icon: Truck,
  },
  {
    number: "6",
    title: "Entrega com acompanhamento",
    copy: "Finalizamos no destino e mantemos suporte para operações recorrentes.",
    Icon: MapPinned,
  },
];

const clientOperations = [
  {
    segment: "Saúde e farmacêutico",
    title: "Cargas sensíveis com mais controle",
    copy: "Operações para produtos que exigem cuidado no manuseio, acondicionamento e cumprimento de prazo.",
    Icon: ShieldCheck,
  },
  {
    segment: "E-commerce e varejo",
    title: "Pedidos saindo com agilidade",
    copy: "Apoio para lojas e sellers que precisam organizar coletas, encomendas e entregas expressas.",
    Icon: Store,
  },
  {
    segment: "Empresas com recorrência",
    title: "Rotas que sustentam a rotina",
    copy: "Planejamento para operações comerciais que dependem de previsibilidade e atendimento direto.",
    Icon: Building2,
  },
];

const clientTestimonials = [
  {
    name: "Marina Costa",
    role: "Gestora de operações",
    company: "Distribuidora de Produtos para Saúde",
    quote:
      "A BRN Express trouxe mais previsibilidade para nossas coletas. A comunicação é direta e a carga chega com o cuidado que nosso segmento exige.",
    initials: "MC",
    tone: "red",
  },
  {
    name: "Rafael Mendes",
    role: "Coordenador comercial",
    company: "Loja de E-commerce Regional",
    quote:
      "Precisávamos de um parceiro para entregas rápidas e recorrentes. O atendimento ficou mais organizado e os prazos passaram a ser mais claros.",
    initials: "RM",
    tone: "green",
  },
  {
    name: "Cláudia Nunes",
    role: "Administradora",
    company: "Empresa de Alimentos Refrigerados",
    quote:
      "O diferencial foi entenderem a necessidade da carga antes de enviar a cotação. Isso dá mais segurança para fechar a operação.",
    initials: "CN",
    tone: "blue",
  },
];

const faqs = [
  [
    "A BRN Express atende quais regiões?",
    "A empresa atua com soluções em Tocantins, Brasília e Goiânia. Para rotas específicas, o ideal é solicitar uma cotação com origem, destino e prazo.",
  ],
  [
    "Quais tipos de carga vocês transportam?",
    "O foco está em produtos farmacêuticos, e-commerce, produtos refrigerados, entregas rápidas, malotes e cargas empresariais.",
  ],
  [
    "Como solicito uma cotação?",
    "Você pode chamar pelo WhatsApp, ligar para a equipe comercial ou enviar o formulário com os dados da carga.",
  ],
  [
    "A empresa trabalha com coletas recorrentes?",
    "Sim. A página foi estruturada para operações pontuais e também para empresas que precisam de rotas e coletas programadas.",
  ],
  [
    "O preço depende de quais fatores?",
    "Origem, destino, volume, urgência, tipo de carga, necessidade de refrigeração e recorrência influenciam a cotação.",
  ],
  [
    "Vocês atendem cargas refrigeradas?",
    "Sim. A BRN Express informa atuação com produtos refrigerados, sempre mediante alinhamento das condições da carga.",
  ],
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieBanner, setCookieBanner] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setCookieBanner(localStorage.getItem("brn-cookie-consent") === null);
  }, []);

  const handleCookieChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem("brn-cookie-consent", choice);
    setCookieBanner(false);
  };

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      [
        ".section-heading",
        ".service-card",
        ".choice-copy",
        ".difference-card",
        ".project-card",
        ".process-card",
        ".authority-image",
        ".authority-copy",
        ".client-heading",
        ".client-proof-panel",
        ".client-operation-card",
        ".review-slot",
        ".contact-panel",
        ".faq-list details",
        ".location-card",
        ".footer-grid > div",
      ].join(", "),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    targets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 45}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="BRN Express">
          <img src="/brand/brn-logo-small.png" alt="BRN Express Transporte & Logística" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">QUERO UMA COTAÇÃO <ArrowRight size={18} /></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      <div
        className={`mobile-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        <button
          className="mobile-close"
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          QUERO UMA COTAÇÃO <ArrowRight size={18} />
        </a>
      </div>

      <section id="inicio" className="hero" aria-label="BRN Express">
        <img
          className="hero-bg"
          src="/brand/brn-hero.jpg"
          fetchPriority="high"
          alt="Operação logística com van, caixas e carga refrigerada"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Transporte & Logística em Palmas, TO</p>
          <h1>Logística expressa para empresas que não podem parar</h1>
          <p>
            A BRN Express transporta produtos farmacêuticos, encomendas de
            e-commerce e cargas refrigeradas com operação ágil para Tocantins,
            Brasília e Goiânia.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">QUERO UMA COTAÇÃO <ArrowRight size={18} /></a>
            <a className="secondary-button" href="#servicos">
              Conhecer soluções
            </a>
          </div>
        </div>
      </section>

      <section className="authority-strip" aria-label="Diferenciais">
        <div className="authority-track" aria-hidden="true">
          {[0, 1].map((group) => (
            <div className="authority-group" key={group}>
              {authorityItems.map((item) => (
                <span key={`${group}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="section section-light">
        <div className="section-heading">
          <p className="eyebrow">Soluções</p>
          <h2>Soluções logísticas para diferentes necessidades de entrega</h2>
          <p>
            Da coleta urgente à rota recorrente, a BRN Express organiza o
            transporte conforme o tipo de carga, prazo e destino.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-visual">
                <img src={service.image} alt={`${service.title} da BRN Express`} loading="lazy" />
                <span className="service-icon" aria-hidden="true">
                  <service.Icon size={22} strokeWidth={2.2} />
                </span>
              </div>
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <strong>{service.benefit}</strong>
                <a href="#contato">
                  Conheça a solução <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="center">
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">QUERO UMA COTAÇÃO <ArrowRight size={18} /></a>
        </div>
      </section>

      <section id="diferenciais" className="section choice-section">
        <div className="choice-copy">
          <p className="eyebrow">Por que escolher</p>
          <h2>Por que a BRN Express é a escolha de quem busca entrega segura</h2>
          <p>
            Transporte é confiança em movimento. Por isso, a operação combina
            atenção comercial, rotas bem alinhadas e cuidado com cargas que
            exigem mais responsabilidade.
          </p>
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">QUERO UMA COTAÇÃO <ArrowRight size={18} /></a>
        </div>
        <div className="difference-grid">
          {differences.map(([title, copy], index) => (
            <article className="difference-card" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" className="dark-section">
        <div className="section-heading invert">
          <p className="eyebrow">Especialidades</p>
          <h2 style={{ color: "#ffffff" }}>
            Transporte aplicado em operações de{" "}
            <strong style={{ color: "var(--red)" }}>prazo, cuidado e controle</strong>
          </h2>
          <p>
            A BRN Express atende empresas que precisam transformar logística em
            previsibilidade, com soluções para cargas sensíveis, recorrentes e
            urgentes.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual">
                <img src={project.image} alt={`${project.title} da BRN Express`} loading="lazy" />
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href="#contato">
                  Conhecer mais <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="center">
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">QUERO UMA COTAÇÃO <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">Processo</p>
          <h2>Um processo estruturado para entregar com mais segurança</h2>
          <p>
            Clareza antes da coleta, cuidado durante o transporte e comunicação
            até a entrega.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>
              <step.Icon className="process-icon" size={24} strokeWidth={2} aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
        <div className="center">
          <a className="primary-button" href="#contato">
            Entender nosso processo
          </a>
        </div>
      </section>

      <section id="sobre" className="authority-block">
        <div className="authority-image">
          <img src="/brand/brn-hero.jpg" alt="Equipe logística preparando carga para entrega" loading="lazy" />
          <div className="badge-card">
            <img src="/brand/brn-logo-small.png" alt="" loading="lazy" />
            <span>Transporte & Logística</span>
          </div>
        </div>
        <div className="authority-copy">
          <p className="eyebrow">Operação especializada</p>
          <h2>Entrega expressa que não abre mão de responsabilidade</h2>
          <p>
            A BRN Express atua para empresas que precisam de mais do que
            deslocamento: precisam de cumprimento de prazo, cuidado com a carga
            e uma comunicação objetiva desde a cotação até a entrega.
          </p>
          <ul>
            <li>Atuação com produtos farmacêuticos, refrigerados e e-commerce.</li>
            <li>Base em Palmas, Tocantins, com rotas comerciais estratégicas.</li>
            <li>Atendimento para entregas urgentes, programadas e recorrentes.</li>
            <li>Processo comercial direto para reduzir dúvidas antes da coleta.</li>
          </ul>
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">QUERO UMA COTAÇÃO <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="section testimonials">
        <div className="client-heading">
          <div>
            <p className="eyebrow">Clientes</p>
            <h2>Confiança construída em entregas reais</h2>
          </div>
          <p>
            Empresas que dependem de prazo, cuidado e comunicação clara encontram
            na BRN Express uma operação preparada para rotinas exigentes.
          </p>
        </div>
        <div className="client-proof-grid">
          <aside className="client-proof-panel">
            <img src="/brand/brn-logo-small.png" alt="BRN Express Transporte & Logística" loading="lazy" />
            <h3>Credibilidade começa no cuidado com cada entrega.</h3>
            <p>
              Transporte para segmentos que não podem depender de improviso:
              saúde, e-commerce, refrigerados e rotas empresariais.
            </p>
            <a href="#contato">
              QUERO UMA COTAÇÃO <ArrowRight size={18} />
            </a>
          </aside>
          <div className="client-operation-list">
            {clientOperations.map((operation) => (
              <article className="client-operation-card" key={operation.segment}>
                <span aria-hidden="true">
                  <operation.Icon size={22} />
                </span>
                <div>
                  <small>{operation.segment}</small>
                  <h3>{operation.title}</h3>
                  <p>{operation.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="review-slots" aria-label="Avaliações de clientes">
          {clientTestimonials.map((testimonial) => (
            <article className="review-slot" key={testimonial.name}>
              <div className="review-stars" aria-label="Avaliação cinco estrelas">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>
              <p>“{testimonial.quote}”</p>
              <div className="review-author">
                <span className={`review-avatar avatar-${testimonial.tone}`}>
                  {testimonial.initials}
                </span>
                <div>
                  <strong>{testimonial.name}</strong>
                  <small>
                    {testimonial.role} · {testimonial.company}
                  </small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="contact-panel">
          <div className="contact-info">
            <p className="eyebrow">Contato</p>
            <h2>Sua operação logística começa com uma conversa.</h2>
            <p>
              Envie os dados da sua carga e receba orientação comercial para a
              melhor rota, prazo e formato de transporte.
            </p>
            <div className="contact-list">
              <a href="tel:+556335715730">(63) 3571-5730</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp: (61) 99826-6953
              </a>
              <a href="mailto:comercial@brnexpress.com.br">comercial@brnexpress.com.br</a>
              <span>Av. E, Quadra 181, Lote 14, Jardim Aureny III, Palmas - TO</span>
            </div>
          </div>
          <form className="lead-form" action={whatsappUrl}>
            <label>
              Nome
              <input name="nome" placeholder="Seu nome" />
            </label>
            <label>
              Telefone
              <input name="telefone" placeholder="(00) 00000-0000" />
            </label>
            <label>
              E-mail
              <input name="email" type="email" placeholder="voce@empresa.com" />
            </label>
            <label>
              Empresa
              <input name="empresa" placeholder="Nome da empresa" />
            </label>
            <label>
              Serviço desejado
              <select name="servico" defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Transporte farmacêutico</option>
                <option>Produtos refrigerados</option>
                <option>E-commerce e encomendas</option>
                <option>Entrega rápida</option>
                <option>Coleta programada</option>
              </select>
            </label>
            <label className="full">
              Mensagem
              <textarea name="mensagem" placeholder="Origem, destino, volume e prazo desejado" />
            </label>
            <button type="submit">QUERO UMA COTAÇÃO <ArrowRight size={18} /></button>
          </form>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Dúvidas frequentes</h2>
          <p>Esclarecemos algumas das principais dúvidas sobre os serviços.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="location-section" aria-label="Localização da BRN Express">
        <div className="location-card">
          <div className="location-copy">
            <p className="eyebrow">Localização</p>
            <h2>Visite a BRN Express em Palmas</h2>
            <p>
              Estamos no Jardim Aureny III, em uma posição estratégica para
              atender operações de transporte e logística em Tocantins e rotas
              regionais.
            </p>
            <div className="location-details">
              <strong>BRN Express Transporte & Logística</strong>
              <span>Av. E, Quadra 181, Lote 14, Jardim Aureny III</span>
              <span>Palmas - TO, CEP 77062-052</span>
            </div>
            <a
              className="primary-button"
              href="https://www.google.com/maps/place/BRN+Express/@-10.3068416,-48.3205257,16.04z/data=!4m6!3m5!1s0x933b319e795d9783:0x9825131fcd47143!8m2!3d-10.3067578!4d-48.3179487!16s%2Fg%2F11hhv52q8k?hl=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title="Mapa da BRN Express em Palmas"
              src="https://www.google.com/maps?q=BRN%20Express%20Palmas%20TO&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <img src="/brand/brn-logo-small.png" alt="BRN Express Transporte & Logística" loading="lazy" />
            <p>
              Transporte e logística para empresas que precisam de entrega
              expressa, cuidado com a carga e atendimento comercial direto.
            </p>
          </div>
          <div>
            <h3>Navegação</h3>
            {navItems.slice(0, 5).map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <div>
            <h3>Serviços</h3>
            {services.slice(0, 5).map((service) => (
              <a key={service.title} href="#servicos">
                {service.title}
              </a>
            ))}
          </div>
          <div>
            <h3>Contato</h3>
            <a href="tel:+556335715730">(63) 3571-5730</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              (61) 99826-6953
            </a>
            <a href="mailto:comercial@brnexpress.com.br">comercial@brnexpress.com.br</a>
            <span>Palmas - TO</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 BRN Express. Todos os direitos reservados.</span>
          <span>Política de Privacidade · Termos de Uso</span>
        </div>
      </footer>

      {cookieBanner && (
        <div className="cookie-banner" role="dialog" aria-label="Política de cookies">
          <div>
            <strong>Política de cookies</strong>
            <p>
              Usamos cookies para melhorar sua experiência, entender o uso do
              site e facilitar o contato com a BRN Express.
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => handleCookieChoice("declined")}>
              Recusar
            </button>
            <button type="button" onClick={() => handleCookieChoice("accepted")}>
              Aceitar cookies
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
