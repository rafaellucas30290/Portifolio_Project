import { Button } from '@/components/Button'
import { ChevronDown } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden pt-28 lg:pt-24 pb-2 lg:pb-8">
      {/* Content */}
      <div className="container mx-auto px-8 lg:px-6 max-w-6xl flex-1 flex flex-col justify-center relative z-10 lg:min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-8 items-start">
          {/* Left Content - Text */}
          <div className="space-y-5 lg:space-y-5">


            {/* Headline */}
            <div className="space-y-4 lg:space-y-4 sm:px-2">
              <h1 className="text-6xl  lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                <span className="block">Eliseu</span>
                <span className="block text-secondary ml-16 ">Milanês.</span>
              </h1>

              <p className="text-sm lg:text-base text-muted-foreground/80 max-w-md leading-relaxed text-justify lg:ml-32 animate-fade-in animation-delay-400">
                Professor de Língua Portuguesa e Inglesa, apaixonado pela educação, literatura e formação do pensamento crítico. Sua prática une conhecimento, diálogo e sensibilidade para tornar o aprendizado uma experiência significativa.
              </p>
            </div>
          </div>

          {/* Right Content - Profile Pic */}
          <div className='relative animate-fade-in animation-delay-300'>
            <div className='relative max-w-90 max-h-110 mx-auto'>
              <div className='relative neo rounded-4xl'>
                <img
                  src='/eliseu_new.png'
                  alt='Eliseu Milanês'
                  className='w-full lg:w-auto lg:h-full aspect-4/5 object-cover rounded-4xl'
                />
              </div>
            </div>
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