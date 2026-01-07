import { Settings, Zap, Construction, Box } from 'lucide-react';
import { Section } from '../App';

interface ServicesProps {
  setCurrentSection: (section: Section) => void;
}

export default function Services({ setCurrentSection }: ServicesProps) {
  const services = [
    {
      icon: Settings,
      title: 'Mantenimiento y Montaje Mecánico Industrial',
      description:
        'Instalación, reparación y mantenimiento de equipos mecánicos industriales con expertise en el sector hidroeléctrico.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Zap,
      title: 'Servicios Eléctricos e Instrumentación',
      description:
        'Revisión de sistemas eléctricos y ajustes de instrumentación de control para garantizar operaciones eficientes.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Construction,
      title: 'Construcción de Obras Civiles',
      description:
        'Desarrollo de infraestructura incluyendo carreteras, puentes y edificaciones con altos estándares de calidad.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Box,
      title: 'Diseño y Fabricación de Estructuras Metálicas',
      description:
        'Análisis estructural y fabricación de proyectos metálicos personalizados para aplicaciones industriales.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50 min-h-screen pt-32 pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="text-center mb-16 animate-in slide-in-from-top duration-500">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en mantenimiento industrial con un equipo
            especializado y comprometido con la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-top duration-700 delay-100">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
