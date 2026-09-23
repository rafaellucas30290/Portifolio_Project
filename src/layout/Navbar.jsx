import { Button } from '@/components/Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="inline-flex shrink-0 items-center">
          <img
            src="/logo(1).png"
            alt="Eliseu Milanês"
            className="h-25 w-25 rounded-full"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="trasition-colors rounded-full px-4 py-2 text-sm text-muted-foreground duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
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
        <div className="glass-strong animate-fade-in md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="py-2 text-lg text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  )
}
