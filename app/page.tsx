import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  );
}