import { Send } from 'lucide-react'
import { Button } from '@/components/Button'

const inputClass =
  'neo-ringed w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none transition-all focus:border-primary/80 focus:ring-1 focus:ring-primary/80'

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: enviar os dados (API, Formspree, EmailJS, etc.)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      {/* Blurs decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-highlight/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto grid items-start gap-12 px-6 lg:grid-cols-2 lg:gap-24 lg:px-24">
        {/* Coluna esquerda */}
        <div>
          <span className="animate-fade-in text-sm font-medium uppercase tracking-wider text-secondary">
            Vamos Conversar
          </span>
          <h2 className="animate-fade-in animation-delay-100 mb-8 mt-8 text-3xl font-bold text-primary lg:text-5xl">
            Palavras também aproximam pessoas
            <span className="text-secondary">.</span>
          </h2>
          <p className="animate-fade-in animation-delay-200 text-justify text-muted-foreground/80 hyphens-auto">
            Se você deseja saber mais sobre meu trabalho, propor uma parceria
            ou simplesmente iniciar uma conversa sobre língua, literatura e
            educação, entre em contato. Será um prazer ouvir você.
          </p>
        </div>

        {/* Coluna direita */}
        <div className="neo animate-fade-in animation-delay-300 w-full rounded-3xl p-8">
          <form className="space-y-6 lg:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Seu nome"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="seu@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Mensagem"
                className={`${inputClass} resize-none`}
              />
            </div>

            <Button className="w-full" size="lg" type="submit">
              Enviar
              <Send aria-hidden="true" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}