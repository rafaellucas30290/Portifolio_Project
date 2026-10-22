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
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-8 lg:px-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Coluna esquerda */}
          <div className="min-w-0">
            <span className="animate-fade-in block text-sm font-semibold uppercase tracking-wider text-secondary">
              Sobre Mim
            </span>

            <h2 className="animate-fade-in animation-delay-200 mb-4 mt-4 text-3xl font-bold leading-tight sm:text-5xl lg:mb-6 xl:text-6xl">
              Educador <span className='text-secondary'>&</span>
              <span className="block ml-24">Pesquisador.</span>
            </h2>

            <p className="text-sm lg:mr-24 md:text-base animate-fade-in animation-delay-200 hyphens-auto text-justify leading-relaxed text-muted-foreground/90">
              Profissional com experiência em docência e gestão escolar,
              atuando em Língua Portuguesa, Literatura e Língua Inglesa.
              Desenvolve práticas pedagógicas ativas, inclusivas e dialógicas,
              com atenção à mediação de conflitos e ao trabalho com estudantes
              neurodivergentes. Destaca-se pela comunicação clara, organização,
              proatividade e manejo de turmas numerosas. Desenvolve pesquisas
              em Teoria e Crítica Literária, com ênfase em interpretação,
              subjetividade e literatura como prática de formação humana.
            </p>
          </div>

          {/* Coluna direita: destaques */}
          <div className="grid min-w-0 gap-6 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="neo-soft animate-fade-in rounded-3xl p-5 sm:p-6"
                style={{ animationDelay: `${(idx + 1) * 200}ms` }}
              >
                <div className="neo-soft mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/90 transition-all hover:bg-primary/70">
                  <item.icon
                    className="h-6 w-6 text-secondary"
                    aria-hidden="true"
                  />
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