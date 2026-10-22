import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'
import { Navbar } from '@/layout/Navbar'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App