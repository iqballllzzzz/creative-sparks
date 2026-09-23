import { ThemeProvider } from './components/theme-provider';
import { Navbar } from './components/navbar';
import { Hero } from './sections/hero';
import { About } from './sections/about';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';
import { Experience } from './sections/experience';
import { Contact } from './sections/contact';
import { Footer } from './sections/footer';
import { Marquee } from './components/marquee';

export default function App() {
  return (
    <ThemeProvider>
      <div className='relative min-h-screen bg-background'>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Marquee />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
