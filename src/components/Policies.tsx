import { FileText, Shield, Users, Award } from 'lucide-react';
import { Section } from '../App';

interface PoliciesProps {
  setCurrentSection: (section: Section) => void;
}

export default function Policies({ setCurrentSection }: PoliciesProps) {

  const policies = [
    {
      icon: Shield,
      title: 'Política de Seguridad y Salud',
      sections: [
        'Compromiso con un ambiente de trabajo seguro',
        'Cumplimiento de normas legales de seguridad industrial',
        'Capacitación continua en prevención de riesgos',
        'Equipos de protección personal obligatorios',
        'Investigación de incidentes y acciones correctivas',
      ],
    },
    {
      icon: Users,
      title: 'Política de Recursos Humanos',
      sections: [
        'Trato justo y respetuoso a todos los colaboradores',
        'Igualdad de oportunidades sin discriminación',
        'Compensación justa y competitiva',
        'Desarrollo profesional y capacitación',
        'Evaluación del desempeño transparente',
      ],
    },
    {
      icon: FileText,
      title: 'Código de Ética Empresarial',
      sections: [
        'Integridad y honestidad en todas las operaciones',
        'Prohibición de corrupción y soborno',
        'Transparencia financiera y contable',
        'Conflictos de interés deben ser reportados',
        'Cumplimiento de leyes y regulaciones aplicables',
      ],
    },
  ];

  const certifications = [
    {
      title: 'ISO 9001 – Sistema de Gestión de Calidad',
      description:
        'Garantiza la mejora continua de nuestros procesos, asegurando la satisfacción de nuestros clientes y la calidad de los servicios entregados.',
    },
    {
      title: 'ISO 14001 – Sistema de Gestión Ambiental',
      description:
        'Refuerza nuestro compromiso con la protección del medio ambiente, el uso responsable de recursos y la reducción del impacto ambiental.',
    },
    {
      title: 'ISO 45001 – Seguridad y Salud en el Trabajo',
      description:
        'Establece estándares internacionales para proteger la salud y seguridad de nuestros colaboradores y contratistas.',
    },
  ];

  const additionalPolicies = [
    {
      title: 'Política de Privacidad y Protección de Datos',
      content:
        'GYC Mantención respeta la privacidad de sus clientes, colaboradores y contratistas. Los datos personales se recopilan, procesan y protegen de acuerdo con la legislación vigente en Chile. Solo se utilizan para fines legítimos y no se comparten sin consentimiento.',
    },
    {
      title: 'Política de Denuncia de Irregularidades',
      content:
        'Contamos con un canal de denuncias confidencial para reportar incumplimientos éticos o legales. Las denuncias se investigan de manera imparcial y se protege la identidad del denunciante. No se toleran represalias contra quienes denuncien de buena fe.',
    },
    {
      title: 'Política Ambiental',
      content:
        'Nos comprometemos a minimizar el impacto ambiental de nuestras operaciones. Cumplimos con regulaciones ambientales, gestionamos residuos responsablemente y promovemos prácticas sostenibles en todos nuestros proyectos.',
    },
    {
      title: 'Política de Proveedores',
      content:
        'Trabajamos solo con proveedores que comparten nuestros valores éticos y de seguridad. Se requiere cumplimiento de estándares laborales, ambientales y de seguridad. Se audita regularmente el desempeño de proveedores.',
    },
  ];

  return (
    <section
      id="politicas"
      className="py-20 bg-white min-h-screen pt-32 pb-12 flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col">

        {/* Header */}
        <div className="text-center mb-12 animate-in slide-in-from-top duration-500 delay-100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Políticas de la Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la ética, seguridad y profesionalismo
          </p>
        </div>

        {/* Políticas principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-in slide-in-from-top duration-700 delay-200">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {policy.title}
                </h3>
                <ul className="space-y-3">
                  {policy.sections.map((section, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span className="text-gray-700">{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Certificaciones */}
        <div className="mb-16 animate-in slide-in-from-top duration-700 delay-300">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Certificaciones y Estándares
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-blue-600"
              >
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-900">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Políticas adicionales */}
        <div className="space-y-6 animate-in slide-in-from-top duration-700 delay-400">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Políticas Adicionales
          </h3>

          {additionalPolicies.map((policy, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border-l-4 border-blue-600"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {policy.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {policy.content}
              </p>
            </div>
          ))}
        </div>

        {/* Compromiso */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl animate-in slide-in-from-top duration-700 delay-500">
          <h3 className="text-xl font-bold mb-4">Nuestro Compromiso</h3>
          <p className="text-lg leading-relaxed">
            En GYC Mantención, estas políticas y certificaciones no son solo documentos,
            sino principios fundamentales que guían nuestras acciones diarias.
            Nos comprometemos a mantener los más altos estándares de calidad,
            seguridad, ética y sostenibilidad en todas nuestras operaciones.
          </p>
        </div>
      </div>

      {/* Botón volver */}
      <div className="flex justify-center pt-8">
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
