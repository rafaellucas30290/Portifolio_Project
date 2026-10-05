import { PersonStanding, Brain, BookOpen, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: PersonStanding,
    title: 'Inclusão',
    description:
      'Práticas pedagógicas inclusivas e acolhedoras e experiência com alunos atípicos (TDAH, TEA, TOD).',
  },
  {
    icon: BookOpen,
    title: 'Metodologia Ativa',
    description:
      'Utiliza práticas que estimulam ativamente a participação discente através de aulas expositivo-dialogadas.',
  },
  {
    icon: Brain,
    title: 'Aplicação da Psicologia e Psicanálise',
    description:
      'Integra fundamentos da Psicologia e da Psicanálise à prática educativa.',
  },
  {
    icon: Lightbulb,
    title: 'Gestão de Sala de Aula',
    description:
      'Proficiência em organização e criatividade na condução de turmas numerosas.',
  },
]

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="container relative z-10 mx-auto px-6 lg:px-24">
        <div className="grid items-start gap-24 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary/80">
                Sobre Mim
              </span>
            </div>

            <h2 className="animate-fade-in animation-delay-200 text-5xl font-bold leading-tight lg:text-6xl">
              Educador <span className="text-secondary/80">&</span>
              <span className="ml-8 block text-primary lg:ml-32">
                Pesquisador
              </span>
            </h2>

            <div className="animate-fade-in animation-delay-200 px-2 text-justify leading-relaxed text-muted-foreground/90 hyphens-auto">
              <p>
                Profissional com experiência em docência e gestão escolar,
                atuando em Língua Portuguesa, Literatura e Língua Inglesa.
                Desenvolve práticas pedagógicas ativas, inclusivas e dialógicas,
                com atenção à mediação de conflitos e ao trabalho com estudantes
                neurodivergentes. Destaca-se pela comunicação clara,
                organização, proatividade e manejo de turmas numerosas.
                Desenvolve pesquisas em Teoria e Crítica Literária, com ênfase
                em interpretação, subjetividade e literatura como prática de
                formação humana.
              </p>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="grid gap-6 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="neo-soft animate-fade-in rounded-3xl p-6"
                style={{ animationDelay: `${(idx + 1) * 200}ms` }}
              >
                <div className="neo-soft mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/90 transition-all hover:bg-primary/70">
                  <item.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}