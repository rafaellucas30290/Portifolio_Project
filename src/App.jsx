import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'
import { Navbar } from '@/layout/Navbar'
import { Testimonials } from './sections/|Testimonials'

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Testimonials/>
        <Contact />
      </main>
    </div>
  );
}

export default App
