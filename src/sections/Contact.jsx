import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'

/* ============================================================
   EDITE AQUI: seus dados de contato
   ============================================================ */
const WHATSAPP_URL = 'https://wa.me/447983396299' // só dígitos, com código do país
const EMAIL = 'eliseu.aulas@gmail.com'
const EMAIL_SUBJECT = 'Contato pelo site'



const focusRing =
  'outline-none focus-visible:ring-2 focus-visible:ring-ring'

export const Contact = () => {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Sem permissão de área de transferência: o endereço continua visível no botão
    }
  }

  return (
    <section id="contact" className="relative flex items-center snap-start pb-24 lg:pb-12 min-h-svh">

      <div className="container relative z-10 mx-auto grid gap-8 px-8 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-24">
        {/* Coluna esquerda */}
        <div className="min-w-0">
          <span className="animate-fade-in block text-sm font-semibold uppercase tracking-wider text-secondary">
            Vamos Conversar
          </span>
          <h2 className="animate-fade-in animation-delay-100 mb-4 mt-4 text-xl font-bold leading-tight text-primary lg:mb-6 lg:text-5xl">
            Palavras aproximam pessoas
            <span className="text-secondary">.</span>
          </h2>
          <p className="animate-fade-in animation-delay-200 hyphens-auto text-sm lg:text-base text-justify leading-relaxed text-muted-foreground/80">
            Se você deseja saber mais sobre meu trabalho, propor uma parceria
            ou simplesmente iniciar uma conversa sobre linguagens, literatura e
            educação, entre em contato. Será um prazer ouvir você.
          </p>
        </div>

        {/* Coluna direita: canais de contato */}
        <div className="neo animate-fade-in animation-delay-300 min-w-0 rounded-3xl p-6 sm:p-8">
          <div className="space-y-4">
            {/* Destaque: WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp (abre em uma nova aba)"
              className={`neo-button group flex items-center gap-4 rounded-2xl bg-primary/90 p-4 text-primary-foreground transition-colors hover:bg-primary/70 ${focusRing}`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10">
                <FaWhatsapp className="h-6 w-6 text-secondary" aria-hidden="true" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-semibold">WhatsApp</span>
                <span className="block text-sm text-primary-foreground/70">
                  Conversa rápida
                </span>
              </span>

              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            {/* E-mail: abre o app de e-mail + botão de copiar */}
            <div className="flex items-stretch gap-3">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`}
                aria-label={`Enviar e-mail para ${EMAIL}`}
                className={`neo-button group flex min-w-0 flex-1 items-center gap-4 rounded-2xl p-4 ${focusRing}`}
              >
                <span className="neo-soft flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/90 transition-all group-hover:bg-primary/70">
                  <Mail className="h-6 w-6 text-secondary" aria-hidden="true" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">E-mail</span>
                  <span className="block truncate text-sm text-muted-foreground/80">
                    {EMAIL}
                  </span>
                </span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? 'E-mail copiado' : 'Copiar e-mail'}
                className={`neo-button flex w-14 shrink-0 items-center justify-center rounded-2xl text-muted-foreground transition-colors hover:text-primary ${focusRing}`}
              >
                {copied ? (
                  <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                ) : (
                  <Copy className="h-5 w-5" aria-hidden="true" />
                )}
              </button>

              <span className="sr-only" aria-live="polite">
                {copied ? 'E-mail copiado para a área de transferência' : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}