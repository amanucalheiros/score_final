const painPoints = [
  'Cartão negado',
  'Empréstimo recusado',
  'Score travado',
  'CPF desorganizado',
  'Ansiedade financeira',
  'Medo de nunca conseguir crédito',
]

const lessons = [
  'Como consultar seu score corretamente',
  'O que pode derrubar sua pontuação',
  'Como organizar dívidas sem desespero',
  'Como usar crédito com inteligência',
  'Hábitos financeiros que fortalecem sua análise',
  'Erros comuns que prejudicam seu CPF',
]

const bonuses = [
  'Checklist CPF Forte',
  'Planilha simples de organização financeira',
  'Calendário de pagamentos',
  'Lista de erros que prejudicam o score',
]

const faqs = [
  {
    question: 'Isso aumenta meu score instantaneamente?',
    answer:
      'Não. O Score Ascendente é um conteúdo educativo. Ele mostra hábitos, organização e caminhos que podem ajudar sua análise de crédito ao longo do tempo.',
  },
  {
    question: 'Funciona para negativado?',
    answer:
      'Sim, ele ajuda você a entender os próximos passos para organizar sua vida financeira, mesmo que esteja começando do zero.',
  },
  {
    question: 'Como recebo o material?',
    answer:
      'O acesso é digital. Após a compra, você recebe as instruções para acessar o guia e os bônus.',
  },
  {
    question: 'Tem garantia?',
    answer:
      'Sim. Você tem 7 dias de garantia para avaliar o material com tranquilidade.',
  },
]

export default function App() {
  return (
    <main>
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">✓</div>
          <span>ScoreAscendente</span>
        </div>
        <a href="#oferta" className="top-cta">Garantir acesso</a>
      </header>

      <section className="hero">
        <div className="grid-bg" />
        <div className="container hero-content">
          <div className="badge">MÉTODO ATUALIZADO 2026</div>

          <h1>
            Pare de ser <span className="red">recusado</span>.
            <br />
            Reconquiste seu <span className="green">crédito</span>
            <br />e sua liberdade.
          </h1>

          <p className="subtitle">
            Aprenda, de forma simples e segura, como organizar seu CPF, entender
            seu score e aplicar hábitos que podem melhorar sua análise de
            crédito ao longo do tempo.
          </p>

          <div className="hero-actions">
            <a href="#oferta" className="primary-btn">QUERO MELHORAR MEU SCORE</a>
            <small>Conteúdo educativo. Não prometemos aprovação garantida.</small>
          </div>

          <div className="trust-row">
            <div>+12.000 alunos</div>
            <div>Compra 100% segura</div>
            <div>4.9 ★ avaliação</div>
          </div>

          <div className="ebook-card">
            <div className="ebook-spine">GUIA SCORE ASCENDENTE</div>
            <div className="ebook-cover">
              <p>GUIA</p>
              <h2>SCORE ASCENDENTE</h2>
              <span>Organize seu CPF</span>
              <div className="score-meter">
                <strong>900</strong>
                <small>de 1000</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Você se identifica?</p>
          <h2>Seu problema pode não ser falta de sorte. Pode ser falta de estratégia.</h2>

          <div className="card-grid">
            {painPoints.map((item) => (
              <div className="glass-card" key={item}>
                <span className="dot" />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section split">
        <div className="container split-grid">
          <div>
            <p className="section-kicker">Quebra de crença</p>
            <h2>Score não sobe com mágica, hack ou promessa falsa.</h2>
          </div>

          <div className="text-box">
            <p>
              O score de crédito está ligado a comportamento financeiro,
              organização, histórico e relacionamento com o mercado. O objetivo
              do Score Ascendente é te mostrar, de forma clara, o que observar,
              o que evitar e como criar uma rotina financeira mais consciente.
            </p>
          </div>
        </div>
      </section>

      <section className="section product">
        <div className="container product-grid">
          <div className="mockup-small">
            <div className="ebook-card mini">
              <div className="ebook-cover">
                <p>GUIA</p>
                <h2>SCORE ASCENDENTE</h2>
                <span>CPF forte</span>
              </div>
            </div>
          </div>

          <div>
            <p className="section-kicker">O produto</p>
            <h2>Um guia prático para fortalecer seu CPF de forma consciente.</h2>
            <p className="paragraph">
              O Score Ascendente foi criado para quem quer entender o score de
              crédito sem linguagem complicada, sem promessa milagrosa e sem cair em golpes.
            </p>
            <a href="#oferta" className="secondary-btn">Ver oferta</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">O que você vai aprender</p>
          <h2>Conteúdo direto, simples e aplicável.</h2>

          <div className="lesson-grid">
            {lessons.map((lesson, index) => (
              <div className="lesson" key={lesson}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <p className="section-kicker">Benefícios emocionais</p>
          <h2>Mais clareza, mais controle e menos ansiedade.</h2>
          <p className="paragraph center">
            Quando você entende sua situação financeira, deixa de agir no escuro
            e começa a tomar decisões com mais segurança.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Bônus inclusos</p>
          <h2>Ferramentas para colocar ordem na vida financeira.</h2>

          <div className="bonus-grid">
            {bonuses.map((bonus) => (
              <div className="bonus-card" key={bonus}>
                <strong>✓</strong>
                <p>{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section offer-section" id="oferta">
        <div className="container">
          <div className="offer-box">
            <p className="section-kicker">Oferta especial</p>
            <h2>Comece hoje a organizar seu CPF.</h2>
            <p className="paragraph center">Acesso imediato ao guia Score Ascendente + bônus.</p>

            <div className="price">
              <span>De R$97</span>
              <strong>R$27</strong>
              <small>Pagamento seguro • Garantia de 7 dias</small>
            </div>

            <a href="#" className="primary-btn big">GARANTIR ACESSO AGORA</a>

            <p className="disclaimer">
              Não prometemos aumento imediato de score nem aprovação garantida.
              Este é um material educativo de organização financeira.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container">
          <p className="section-kicker">Dúvidas frequentes</p>
          <h2>Perguntas antes de começar.</h2>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <strong>Score Ascendente</strong>
          <p>Conteúdo educativo sobre score de crédito, CPF e organização financeira.</p>
        </div>
      </footer>
    </main>
  )
}
