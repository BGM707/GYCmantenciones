import { Target, Eye, CheckCircle } from 'lucide-react';
import { Section } from '../App';

interface AboutProps {
  setCurrentSection: (section: Section) => void;
}

export default function About({ setCurrentSection }: AboutProps) {
  const values = [
    'Compromiso con la calidad y seguridad',
    'Equipo profesional y capacitado',
    'Precios competitivos en el mercado',
    'Mejora continua en nuestros procesos',
    'Expertise en sector hidroeléctrico',
    'Cotizaciones sin costo',
  ];

  const team = [
    {
      name: 'Juan Pérez',
      role: 'Gerente General',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'María González',
      role: 'Tesorera',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Carlos Muñoz',
      role: 'Ingeniero a Cargo',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
    {
      name: 'Ana Rivas',
      role: 'Jefa de Operaciones',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Pedro Soto',
      role: 'Supervisor Técnico',
      image: 'https://randomuser.me/api/portraits/men/71.jpg',
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-20 bg-white min-h-screen pt-32 pb-12 flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 animate-in slide-in-from-top duration-500">
          <div>
            <img
              src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Equipo GYC Mantención"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre GYC Mantención
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundada en 2021 en Santa Barbara, Región del Biobío, GYC Mantención SPA es
              una empresa chilena especializada en mantenimiento industrial y montaje
              mecánico.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nos destacamos por nuestra expertise en el sector hidroeléctrico, brindando
              soluciones técnicas eficaces y de calidad que generan confianza y compromiso
              con nuestros clientes.
            </p>
          </div>
        </div>

        {/* Misión / Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 animate-in slide-in-from-top duration-700 delay-100">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Brindar soluciones técnicas, eficaces y de calidad en los procesos
              productivos de nuestros clientes, fomentando la confianza, el compromiso y
              la seguridad en el trabajo.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Ser reconocidos como la empresa líder en mantenimiento industrial del sector
              hidroeléctrico, destacándonos por nuestra calidad, seguridad y excelencia en
              el servicio.
            </p>
          </div>
        </div>

        {/* Fortalezas */}
        <div className="bg-gray-50 p-8 rounded-lg animate-in slide-in-from-top duration-700 delay-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nuestras Fortalezas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo Destacado */}
        <div className="bg-white p-8 rounded-lg mt-16 animate-in slide-in-from-top duration-700 delay-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Equipo Destacado
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-blue-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-gray-900">
                  {member.name}
                </span>
                <span className="text-sm text-gray-600">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botón volver */}
      <div className="flex justify-center pt-8 pb-4">
        <button
          onClick={() => setCurrentSection('inicio')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Volver al Inicio
        </button>
      </div>
    </section>
  );
}
