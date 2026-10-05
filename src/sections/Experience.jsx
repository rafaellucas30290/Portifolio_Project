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
    description: "Experiência como professor de Linguagens e Atualidades",
    current: false,
  },
  {
    role: "Língua Inglesa — Cursos de Idiomas",
    description: "Experiência em turmas de nível A1, A2, B1, B2 e EAP (English for Academic Purposes).",
    current: false,
  },
  {
    role: "Língua Estrangeira — PLAC",
    description: "Experiência como professor de Língua Portuguesa como segunda língua para alunos nativos de língua espanhola",
    current: false,
  },


];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 lg:px-24 relative overflow-hidden">
      {/* Decorative blur (self-closing) */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Jornada Profissional
          </span>
          <h2 className="mt-4 text-5xl md:text-5xl font-bold animate-fade-in">
            Experiência
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-secondary via-secondary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_var(--color-secondary)]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-secondary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="neo p-6 rounded-2xl">
                    <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                    <p className="mt-3 text-xs text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};