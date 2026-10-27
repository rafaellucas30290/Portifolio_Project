const experiences = [
  {
    role: "Língua Portuguesa — Produção Textual e Redação",
    description: "Experiência como professor de língua portuguesa em turmas do 6° ao 9°.",
    current: true,
  },
  {
    role: "Língua Portuguesa — Gramática e Literatura",
    description: "Experiência com turmas do Ensino Médio com expertise em Morfologia, Sintaxe e Teorias de Linguagem.",
    current: true,
  },
  {
    role: "Pré-vestibular — ENEM",
    description: "Experiência como professor de Linguagens e Atualidades.",
    current: false,
  },
  {
    role: "Língua Inglesa — Cursos de Idiomas",
    description: "Experiência em turmas de nível A1, A2, B1, B2 e EAP (English for Academic Purposes).",
    current: false,
  },
  {
    role: "Língua Estrangeira — PLAC",
    description: "Experiência como professor de Língua Portuguesa como segunda língua para alunos nativos de língua espanhola.",
    current: false,
  },


];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex min-h-svh snap-start items-center px-4 pt-24 pb-10 lg:pt-8 lg:pb-6 lg:px-24"
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8 lg:mb-8">
          <span className="animate-fade-in block text-sm font-semibold uppercase tracking-wider text-secondary">
            Jornada Profissional
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold animate-fade-in">
            Experiência
          </h2>
        </div>

        <div className="relative">
          {/* Linha da timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-secondary via-secondary/30 to-transparent -translate-x-1/2 shadow-[0_0_25px_var(--color-secondary)]" />

          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-18">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0

              return (
                <div
                  key={idx}
                  style={{
                    animationDelay: `${(idx + 1) * 150}ms`,
                    gridRow: `${idx + 1} / span 2`,
                  }}
                  className={`relative animate-fade-in self-start pl-8 md:pl-0 ${
                    isLeft
                      ? 'md:col-start-1 md:pr-10 lg:pr-12 md:text-right'
                      : 'md:col-start-2 md:pl-10 lg:pl-12'
                  }`}
                >
                  {/* Ponto: centralizado no card e sobre a linha */}
                  <div
                    className={`absolute top-1/2 left-0 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary ring-4 ring-background ${
                      isLeft ? 'md:left-auto md:right-0 md:translate-x-1/2' : ''
                    }`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="neo-lift rounded-2xl p-5 lg:p-4 xl:p-5">
                    <h3 className="text-lg lg:text-base xl:text-lg font-semibold">{exp.role}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
};