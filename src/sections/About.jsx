import { PersonStanding, Brain, BookOpen, Lightbulb } from 'lucide-react';
const highlights = [
    {
        icon: PersonStanding,
        title: "Inclusão",
        description: "Práticas pedagógicas inclusivas e acolhedoras e experiência com alunos atípicos (TDAH, TEA, TOD).",
    },
    {
        icon: BookOpen,
        title: "Metodologia Ativa",
        description: "Utiliza de práticas que estimulam ativamente a participação discente através de aulas expositivas-dialogadas."
    },
    {
        icon: Brain,
        title: "Aplicação da Psicologia e Psicanálise",
        description: "Integra fundamentos da Psicologia e da Psicanálise à prática educativa."
    },
    {
        icon: Lightbulb,
        title: "Gestão de Sala de Aula",
        description: "Profeficiência em organização e criatividade na condução de turmas numerosas."
    }

]



export const About = () => {
    return <section id='About' className='py-32 relative overflow-hidden'>
        <div className='container mx-auto px-6 lg:px-6 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
                {/*Left Column */}
                <div className='space-y-6'>
                    <div className='animate-fade-in'>
                        <span className='text-muted-foreground/70 font-semibold text-sm tracking-wider uppercase'>
                            Sobre Mim
                        </span>
                    </div>
                    <h2 className='text-secondary text-5xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-200'>
                        <span>Educador &<span className='block ml-8 lg:ml-16 text-bold text-primary'>Pesquisador</span></span>
                    </h2>
                    <div className='block px-2 lg:ml-16 text-muted-foreground/80 leading-relaxed text-sm animate-fade-in animation-delay-200 text-justify'>

                    <p>
                        Profissional com experiência em docência e gestão escolar, atuando em Língua Portuguesa, Literatura e Língua Inglesa. Desenvolve práticas pedagógicas ativas, inclusivas e dialógicas, com atenção à mediação de conflitos e ao trabalho com estudantes neurodivergentes. Destaca-se pela comunicação clara, organização, proatividade e manejo de turmas numerosas. Desenvolve pesquisas em Teoria e Crítica Literária, com ênfase em interpretação, subjetividade e literatura como prática de formação humana.
                    </p>
                    </div>
                </div>

                {/* Right Column - Highlights*/}

                <div className='grid lg:grid-cols-2 gap-6 pt-24'>
                    {highlights.map((item, idx) => (
                        <div key={idx} className='neo-soft p-6 rounded-3xl animate-fade-in' style={{
                            animationDelay: `${(idx + 1)*200}ms`
                        }}> 
                            <div className='neo-soft w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center mb-4 hover:bg-primary/70 transition-all'>
                                <item.icon className='w-6 h-6 text-secondary'/>
                            </div>
                            <h3 className='font-semibold mb-2'>{item.title}</h3>
                            <p className='text-sm text-muted-foreground/80'>{item.description}</p>
                        </div>
                    ))}
                </div>
                

            </div>
        </div>
    </section>;
}