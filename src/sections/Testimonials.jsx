import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const testimonials = [
  {
    quote:
      'É um excelente professor, com uma didática que facilita muito até os assuntos mais difíceis. Além do vasto conhecimento literário, consegue tornar as aulas interessantes e leves. Também é uma pessoa muito gente boa e que faz com que os alunos se sintam à vontade para aprender.',
    role: 'Aluno de Língua Portuguesa',
  },
  {
    quote:
      'Um dos melhores professores que já tive. Didática mágica e bem marcante. Valeu cada minuto de aula que já tive com ele.',
    role: 'Aluno de Língua Inglesa',
  },
  {
    quote: 'A minha experiência quanto ao professor Eliseu Milanês é algo de conexão. Não sei identificar se foi por ele ser novo ou por ser um parceiro em sala de aula, pois ouvia os alunos e sabia mediar os conflitos que surgiam, o que é importante. Mas o amor pela sala de aula faz a aprendizagem ficar mais leve e mais interessante.',
    role: 'Aluno pré-vestibular'
  },
  {
    quote: 'O professor Eliseu é um daqueles professores que conseguem transformar o aprendizado em algo leve, interessante e prazeroso. Com uma didática excelente, consegue explicar os conteúdos de forma clara e aproximar a língua da nossa realidade, sempre trazendo exemplos práticos e momentos de descontração.',
    role: 'Aluno pré-vestibular'
  }
]

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [height, setHeight] = useState(undefined)
  const contentRef = useRef(null)

  const next = () => setActiveIdx((prev) => (prev + 1) % testimonials.length)
  const previous = () =>
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const observer = new ResizeObserver(() => setHeight(el.offsetHeight))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const item = testimonials[activeIdx]

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 lg:py-24">
      <div className="container relative z-10 mx-auto grid gap-8 px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-24">
        {/* Coluna esquerda: cabeçalho */}
        <div className="min-w-0">
          <span className="animate-fade-in block text-sm font-medium uppercase tracking-wider text-secondary">
            Palavras dos Alunos
          </span>
          <h2 className="animate-fade-in animation-delay-200 mb-4 mt-4 text-2xl  font-bold leading-tight sm:text-5xl lg:mb-6">
            Vozes que Aprendem
          </h2>
          <p className="animate-fade-in animation-delay-200 hyphens-auto text-base text-justify leading-relaxed text-muted-foreground/80">
            Cada experiência em sala de aula é também uma oportunidade de troca,
            descoberta e crescimento. Estas são algumas palavras de alunos que
            vivenciaram esse processo e compartilham suas percepções sobre as
            aulas, os aprendizados e a maneira de ensinar.
          </p>
        </div>

        {/* Coluna direita: balão + navegação */}
        <div className="min-w-0">
          <div className="neo animate-fade-in animation-delay-200 relative rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
              <Quote className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
            </div>

            <div
              className="mt-4 overflow-hidden transition-[height] duration-500 ease-in-out"
              style={{ height }}
              aria-live="polite"
            >
              <div ref={contentRef}>
                <figure key={activeIdx} className="animate-fade-in">
                  <blockquote className="mb-8 text-base sm:text-lg lg:text-2xl font-medium leading-relaxed ">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="text-sm text-muted-foreground">
                    {item.role}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Navegação: abaixo do balão, centralizada */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={previous}
              aria-label="Depoimento anterior"
              className="neo-soft rounded-full p-3 transition-all hover:bg-primary/10 hover:text-primary"
            >
              <ChevronLeft aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Ir para o depoimento ${idx + 1}`}
                  aria-current={idx === activeIdx ? 'true' : undefined}
                  className={`relative h-2 rounded-full transition-all duration-300 before:absolute before:-inset-2 before:content-[''] ${idx === activeIdx
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Próximo depoimento"
              className="neo-soft rounded-full p-3 transition-all hover:bg-primary/10 hover:text-primary"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}