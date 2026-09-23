export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      aria-label="Eliseu Milanês — Language Teacher"
    >
      {/* Mobile: smaller centered image. Desktop: right-aligned ~50–70% */}
      <div
        className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-full
        h-[90%]
        
        lg:top-0
        lg:right-0
        lg:left-auto
        lg:bottom-auto
        lg:translate-x-0
        lg:w-[70%]
        lg:h-full">
        <img
          src="/eliseu_profile.png"
          alt="Eliseu Milanês"
          className="size-full object-cover object-top animate-fade-in lg:hidden"
          style={{ animationDelay: '200ms' }}
          onError={(event) => {
            event.currentTarget.style.visibility = 'hidden'
          }}
        />
        <img
          src="/kojima (1).png"
          alt="Eliseu Milanês"
          className="hidden size-full object-cover object-top animate-fade-in lg:block"
          style={{ animationDelay: '200ms' }}
          onError={(event) => {
            event.currentTarget.style.visibility = 'hidden'
          }}
        />
      </div>

      {/* Mobile: fade down into white behind text. Desktop: side fade */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-white from-15% via-white/85 via-25% to-transparent to-50% md:bg-gradient-to-r md:from-background/70 md:via-background/25 md:to-transparent md:from-0% md:via-35% md:to-70% lg:from-transparent lg:via-transparent"
        aria-hidden
      />

      {/* Mobile: bottom-left. Desktop: vertically centered */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-end px-6 pb-10 md:relative md:min-h-screen md:max-w-2xl md:justify-center md:px-10 md:pb-28 md:pt-28 lg:max-w-3xl lg:px-16 xl:px-24">
        <h1 className="animate-fade-in text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl md:text-8xl lg:text-9xl">
          Hello.
        </h1>
        <p
          className="mt-3 animate-fade-in text-xl font-bold tracking-wide text-accent sm:text-2xl md:text-4xl"
          style={{ animationDelay: '200ms' }}
        >
          I'm Eliseu Milanês
        </p>
      </div>
    </section>
  )
}
