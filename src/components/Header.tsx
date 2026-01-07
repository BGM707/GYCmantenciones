import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../App';

// ✅ IMPORT CORRECTO DEL LOGO
import logo from '../image/logo-e1727654075501.png';

interface HeaderProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
}

export default function Header({ currentSection, setCurrentSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', id: 'inicio' as Section },
    { name: 'Servicios', id: 'servicios' as Section },
    { name: 'Nosotros', id: 'nosotros' as Section },
    { name: 'Trabaja con Nosotros', id: 'postulaciones' as Section },
    { name: 'Políticas', id: 'politicas' as Section },
    { name: 'Contacto', id: 'contacto' as Section },
  ];

  const handleNavigation = (section: Section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md backdrop-blur-md bg-opacity-90 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('inicio')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="GYC Mantención"
                className="h-12 w-auto animate-pulse-heart hover:animate-none"
              />

              <span className="hidden sm:block text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                GYC Mantención
              </span>
            </button>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  currentSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigation('denuncias')}
              className={`ml-2 px-4 py-2 font-medium rounded-lg transition-all duration-200 flex items-center shadow-md hover:shadow-lg ${
                currentSection === 'denuncias'
                  ? 'bg-amber-600 text-black'
                  : 'bg-amber-500 text-black hover:bg-amber-600'
              }`}
            >
              <Shield className="w-4 h-4 mr-2" />
              Denuncias
            </button>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                    currentSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => handleNavigation('denuncias')}
                className="w-full text-left px-4 py-3 font-medium rounded-lg flex items-center bg-amber-500 text-white hover:bg-amber-600"
              >
                <Shield className="w-4 h-4 mr-2" />
                Canal de Denuncias
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
