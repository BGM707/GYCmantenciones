import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import News from './components/News'; // ✅ Importar el nuevo componente
import Careers from './components/Careers';
import Whistleblower from './components/Whistleblower';
import Policies from './components/Policies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

// ✅ Agregamos 'noticias' al tipo Section
export type Section = 
  | 'inicio' 
  | 'servicios' 
  | 'nosotros' 
  | 'noticias'      // Nueva sección para el Header
  | 'postulaciones'  // Se mantiene para el Footer
  | 'denuncias' 
  | 'politicas' 
  | 'contacto';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('inicio');

  const renderSection = () => {
    switch (currentSection) {
      case 'inicio':
        return <Hero setCurrentSection={setCurrentSection} />;
      case 'servicios':
        return <Services setCurrentSection={setCurrentSection} />;
      case 'nosotros':
        return <About setCurrentSection={setCurrentSection} />;
      case 'noticias':
        // ✅ Renderizamos la nueva sección de noticias
        return <News setCurrentSection={setCurrentSection} />;
      case 'postulaciones':
        // ✅ Sigue existiendo para que el Footer pueda activarla
        return <Careers setCurrentSection={setCurrentSection} />;
      case 'denuncias':
        return <Whistleblower setCurrentSection={setCurrentSection} />;
      case 'politicas':
        return <Policies setCurrentSection={setCurrentSection} />;
      case 'contacto':
        return <Contact setCurrentSection={setCurrentSection} />;
      default:
        return <Hero setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer setCurrentSection={setCurrentSection} />
      <FloatingContactButton setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default App;