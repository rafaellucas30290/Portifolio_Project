import { Button } from '@/components/Button'
import { Menu, X } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const NEUTRAL_THRESHOLD = 50   // até aqui: neutro
const HIDE_THRESHOLD = 150     // a partir daqui, scrollando pra baixo: esconde

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navState, setNavState] = useState('neutral') // 'neutral' | 'raised' | 'hidden'
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY.current

      if (currentScrollY < NEUTRAL_THRESHOLD) {
        // topo da página -> sempre neutro, independente da direção
        setNavState('neutral')
      } else if (isScrollingDown && currentScrollY > HIDE_THRESHOLD) {
        // passou do limite E continua descendo -> esconde
        setNavState('hidden')
      } else {
        // scrollando pra cima, ou ainda na faixa intermediária -> levantado
        setNavState('raised')
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isRaised = navState === 'raised'
  const isHidden = navState === 'hidden' && !isMobileMenuOpen // não esconde com o menu aberto

  return (
    <header
      inert={isHidden}
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] md:w-fit md:max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full py-3 transition-all duration-500
    ${isRaised ? 'max-md:bg-background max-md:shadow-lg' : ''}
    ${isHidden ? '-translate-y-32 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}
  `}
    >
      <nav className="flex items-center justify-between gap-8 px-6 md:justify-start">
        <a href="#" className="lg:hidden inline-flex shrink-0 items-center">
          <img
            src="/logo-crop.png"
            alt="Eliseu Milanês"
            className="h-12 w-12 rounded-3xl"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-1 transition-all duration-500
            ${isRaised ? 'neo' : 'bg-transparent'}
          `}
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:shadow-[inset_2px_2px_4px_var(--color-shadow-dark),inset_-2px_-2px_4px_var(--color-shadow-light)] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="neo absolute left-0 right-0 top-full mt-2 animate-slide-down rounded-3xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="py-2 text-lg text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}