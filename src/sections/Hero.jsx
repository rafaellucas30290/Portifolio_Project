import { Button } from '@/components/Button'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

const skills = [
  "Língua Portuguesa",
  "Redação",
  "Língua Inglesa",
  "Literatura",
  "Gramática",
  "Produção Textual",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden pt-28 lg:pt-24 pb-20 lg:pb-6">
      {/* Content */}
      <div className="container mx-auto px-3 flex-1 flex flex-col justify-center relative z-10 lg:min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 lg:space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-8 py-2 rounded-full neo-soft neo-text text-sm text-secondary glow-text font-semibold">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Language Arts Educator
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 lg:space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
                Entre <span className="font-bold">palavras</span> e <span className="text-secondary glow-text">ideias</span>
                <br />
                a educação ganha <span className="font-serif text-accent italic font-bold">sentido</span>.
              </h1>
              <p className="text-lg lg:text-base text-muted-foreground/70 max-w-lg animate-fade-in animation-delay-400">
                Professor de Língua Portuguesa e Inglesa, apaixonado pela educação, literatura e formação do pensamento crítico. Sua prática une conhecimento, diálogo e sensibilidade para tornar o aprendizado uma experiência significativa.
              </p>
            </div>

            <div>
              <Button size="lg"><span className="hover:underline hover:decoration-2 hover:underline-offset-4">Entrar em Contato</span> <ArrowUpRight className='w-5 h-5' /></Button>
            </div>
          </div>

          {/* Right Content - Profile Pic */}
          <div className='relative animate-fade-in animation-delay-300'>
            <div className='relative max-w-90 max-h-110 mx-auto'>
              <div className='relative neo rounded-4xl lg:h-full'>
                <img
                  src='/eliseu-wbackground.png'
                  alt='Eliseu Milanês'
                  className='w-full lg:w-auto lg:h-full aspect-[4/5] object-cover rounded-4xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="shrink-0 mt-16 lg:mt-0 animate-fade-in animation-delay-600">
        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-32
         bg-gradient-to-r from-background to-transparent z-10"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32
         bg-gradient-to-l from-background to-transparent z-10"
          />
          <div className="flex w-max animate-marquee">
            {[...skills, ...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="flex-shrink-0 px-8 py-4 lg:py-3">
                <span className="text-xl lg:text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 flex justify-center pt-6 lg:pt-2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}