import { Settings, Zap, Construction, Box, Wrench, HardHat, Cog, Flame, Shield, Droplet, Wind, Gauge } from 'lucide-react';
import { Section } from '../App';

interface ServicesProps {
  setCurrentSection: (section: Section) => void;
}

export default function Services({ setCurrentSection }: ServicesProps) {
  const mainServices = [
    {
      icon: Settings,
      title: 'Mantenimiento y Montaje Mecánico Industrial',
      description:
        'Instalación, reparación y mantenimiento de equipos mecánicos industriales con expertise en el sector hidroeléctrico.',
      features: ['Turbinas hidráulicas', 'Sistemas de transmisión', 'Bombas industriales', 'Reductores y multiplicadores'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Servicios Eléctricos e Instrumentación',
      description:
        'Revisión de sistemas eléctricos y ajustes de instrumentación de control para garantizar operaciones eficientes.',
      features: ['Tableros de control', 'Sistemas SCADA', 'Calibración de instrumentos', 'Automatización industrial'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      icon: Construction,
      title: 'Construcción de Obras Civiles',
      description:
        'Desarrollo de infraestructura incluyendo carreteras, puentes y edificaciones con altos estándares de calidad.',
      features: ['Estructuras de hormigón', 'Movimiento de tierras', 'Pavimentación', 'Obras hidráulicas'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-slate-600 to-gray-700',
    },
    {
      icon: Box,
      title: 'Diseño y Fabricación de Estructuras Metálicas',
      description:
        'Análisis estructural y fabricación de proyectos metálicos personalizados para aplicaciones industriales.',
      features: ['Estructuras para plantas', 'Pasarelas y escaleras', 'Soportes especiales', 'Tanques y estanques'],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-600 to-purple-600',
    },
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Mantenimiento Predictivo y Preventivo',
      description: 'Análisis de vibraciones, termografía y planificación de mantenciones programadas.',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      icon: HardHat,
      title: 'Servicios de Soldadura Especializada',
      description: 'Soldadura certificada en acero inoxidable, aluminio y aleaciones especiales.',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: Cog,
      title: 'Balanceo Dinámico de Rotores',
      description: 'Corrección de desbalances en turbinas, ventiladores y equipos rotativos.',
      color: 'from-violet-500 to-fuchsia-600',
    },
    {
      icon: Flame,
      title: 'Servicios de Calderería',
      description: 'Fabricación y reparación de calderas, intercambiadores de calor y recipientes a presión.',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: Shield,
      title: 'Inspección y Ensayos No Destructivos',
      description: 'Ultrasonido, radiografía, partículas magnéticas y líquidos penetrantes.',
      color: 'from-blue-500 to-sky-600',
    },
    {
      icon: Droplet,
      title: 'Sistemas Hidráulicos y Neumáticos',
      description: 'Instalación, mantención y reparación de circuitos hidráulicos y neumáticos industriales.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Wind,
      title: 'Sistemas de Ventilación Industrial',
      description: 'Diseño, instalación y mantención de sistemas de extracción y ventilación.',
      color: 'from-slate-500 to-gray-600',
    },
    {
      icon: Gauge,
      title: 'Alineación Láser de Precisión',
      description: 'Alineamiento de equipos rotativos, ejes y acoplamientos con tecnología láser.',
      color: 'from-green-500 to-teal-600',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen pt-32 pb-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
            <Settings className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Nuestros Servicios
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales en mantenimiento industrial con un equipo
            especializado y comprometido con la excelencia
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Services */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Servicios Principales
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Servicios Especializados
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Amplia gama de servicios técnicos complementarios para satisfacer todas las necesidades de su industria
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
                  
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 min-h-[3.5rem]">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-10 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas una Solución Personalizada?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Nuestro equipo de expertos está listo para diseñar una solución a medida para tu proyecto industrial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentSection('contacto')}
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contáctanos
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center pt-12">
        <button
          onClick={() => setCurrentSection('inicio')}
          className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg transform hover:-translate-y-1"
        >
          <span className="flex items-center">
            Volver al Inicio
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-9-9l9 9-9 9" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}