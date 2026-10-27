import { ChevronDown } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="snap-start relative h-svh min-h-136 lg:h-screen lg:min-h-screen flex flex-col pt-18 pb-6 lg:pb-8">
      {/* Content */}
      <div className="container mx-auto px-8 max-w-6xl flex-1 flex flex-col justify-center relative z-10 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-8 items-start max-lg:gap-5">
          {/* Left Content - Text */}
          <div className="space-y-2 lg:space-y-5">


            {/* Headline */}
            <div className="space-y-6 sm:space-y-4 sm:px-2">
              <h1 className="text-[clamp(3rem,16vw,4.5rem)] sm:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-in animation-delay-200">
                <span className="block lg:ml-6">Eliseu</span>
                <span className="ml-[1.0em] lg:ml-24">
                  Milanês<span className="text-secondary">.</span>
                </span>
              </h1>

              <p className="text-[clamp(1rem,4.6vw,1.25rem)] lg:text-base text-muted-foreground/80 max-w-md leading-relaxed text-justify lg:ml-32 animate-fade-in hyphens-auto animation-delay-400">
                Professor de Língua Portuguesa e Inglesa, apaixonado pela educação, literatura e formação do pensamento crítico. Sua prática une conhecimento, diálogo e sensibilidade para tornar o aprendizado uma experiência significativa.
              </p>
            </div>
          </div>

          {/* Right Content - Profile Pic */}
          <div
            aria-hidden="true"
            className='relative animate-fade-in animation-delay-300 hidden sm:flex sm:justify-center lg:block'>
            <div className='relative max-w-100 max-h-120 mx-auto '>
              <div className='relative neo-lift rounded-4xl'>
                {/* Mobile: altura = o que sobra na tela depois do texto (proporção 4:5 mantida, sem corte) */}
                <img
                  src='/eliseu_new.png'
                  alt='Eliseu Milanês'
                  className='w-full lg:w-auto lg:h-full max-lg:w-auto max-lg:h-[max(10rem,min(calc(min(100vw-4rem,22.5rem)*1.25),calc(100svh-min(76vw,21rem)-8.5rem)))] aspect-4/5 object-cover rounded-4xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shrink-0 hidden lg:flex justify-center pt-2 animate-fade-in animation-delay-800">
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