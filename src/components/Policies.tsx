import { FileText, Shield, Users, Award, CheckCircle, Lock, Leaf, UserCheck } from 'lucide-react';
import { Section } from '../App';

interface PoliciesProps {
  setCurrentSection: (section: Section) => void;
}

export default function Policies({ setCurrentSection }: PoliciesProps) {

  const policies = [
    {
      icon: Shield,
      title: 'Política de Seguridad y Salud',
      color: 'from-emerald-500 to-teal-600',
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
      color: 'from-blue-500 to-indigo-600',
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
      color: 'from-purple-500 to-pink-600',
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
      title: 'ISO 9001',
      subtitle: 'Sistema de Gestión de Calidad',
      description:
        'Garantiza la mejora continua de nuestros procesos, asegurando la satisfacción de nuestros clientes y la calidad de los servicios entregados.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: 'ISO 14001',
      subtitle: 'Sistema de Gestión Ambiental',
      description:
        'Refuerza nuestro compromiso con la protección del medio ambiente, el uso responsable de recursos y la reducción del impacto ambiental.',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      title: 'ISO 45001',
      subtitle: 'Seguridad y Salud en el Trabajo',
      description:
        'Establece estándares internacionales para proteger la salud y seguridad de nuestros colaboradores y contratistas.',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
  ];

  const additionalPolicies = [
    {
      icon: Lock,
      title: 'Política de Privacidad y Protección de Datos',
      content:
        'GYC Mantención respeta la privacidad de sus clientes, colaboradores y contratistas. Los datos personales se recopilan, procesan y protegen de acuerdo con la legislación vigente en Chile. Solo se utilizan para fines legítimos y no se comparten sin consentimiento.',
      gradient: 'from-violet-500/10 to-purple-500/10',
      iconBg: 'bg-violet-500',
    },
    {
      icon: UserCheck,
      title: 'Política de Denuncia de Irregularidades',
      content:
        'Contamos con un canal de denuncias confidencial para reportar incumplimientos éticos o legales. Las denuncias se investigan de manera imparcial y se protege la identidad del denunciante. No se toleran represalias contra quienes denuncien de buena fe.',
      gradient: 'from-amber-500/10 to-orange-500/10',
      iconBg: 'bg-amber-500',
    },
    {
      icon: Leaf,
      title: 'Política Ambiental',
      content:
        'Nos comprometemos a minimizar el impacto ambiental de nuestras operaciones. Cumplimos con regulaciones ambientales, gestionamos residuos responsablemente y promovemos prácticas sostenibles en todos nuestros proyectos.',
      gradient: 'from-emerald-500/10 to-teal-500/10',
      iconBg: 'bg-emerald-500',
    },
    {
      icon: CheckCircle,
      title: 'Política de Proveedores',
      content:
        'Trabajamos solo con proveedores que comparten nuestros valores éticos y de seguridad. Se requiere cumplimiento de estándares laborales, ambientales y de seguridad. Se audita regularmente el desempeño de proveedores.',
      gradient: 'from-sky-500/10 to-blue-500/10',
      iconBg: 'bg-sky-500',
    },
  ];

  return (
    <section
      id="politicas"
      className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen pt-32 pb-12 flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Políticas de la Empresa
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro compromiso con la ética, seguridad y profesionalismo
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Políticas principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${policy.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${policy.color} rounded-xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {policy.title}
                </h3>
                
                <ul className="space-y-4">
                  {policy.sections.map((section, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-gray-700 leading-relaxed">{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Certificaciones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Certificaciones y Estándares
            </h3>
            <p className="text-lg text-gray-600">
              Comprometidos con la excelencia internacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`${cert.color} p-8 text-white relative`}>
                  <Award className="w-12 h-12 mb-4 opacity-90" />
                  <h4 className="text-2xl font-bold mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm opacity-90 font-medium">
                    {cert.subtitle}
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Políticas adicionales */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Políticas Adicionales
            </h3>
            <p className="text-lg text-gray-600">
              Marco de actuación y responsabilidad corporativa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalPolicies.map((policy, index) => {
              const IconComponent = policy.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${policy.gradient} p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start mb-4">
                    <div className={`${policy.iconBg} p-3 rounded-xl mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {policy.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-14">
                    {policy.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compromiso */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-10 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 mr-3" />
              <h3 className="text-3xl font-bold">Nuestro Compromiso</h3>
            </div>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
              En GYC Mantención, estas políticas y certificaciones no son solo documentos,
              sino principios fundamentales que guían nuestras acciones diarias.
              Nos comprometemos a mantener los más altos estándares de calidad,
              seguridad, ética y sostenibilidad en todas nuestras operaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Botón volver */}
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