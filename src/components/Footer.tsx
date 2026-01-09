import { 
  Shield, 
  Newspaper, 
  Home, 
  Settings, 
  Users, 
  Briefcase, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare 
} from 'lucide-react';
import { Section } from '../App';
import logo from '../image/logo-e1727654075501.png';

interface FooterProps {
  setCurrentSection: (section: Section) => void;
}

export default function Footer({ setCurrentSection }: FooterProps) {
  const clients = [
    { name: 'Colbún', color: 'from-orange-400 to-red-500' },
    { name: 'Enel', color: 'from-green-400 to-blue-500' },
    { name: 'Transelec', color: 'from-blue-400 to-indigo-600' },
    { name: 'Hidro Sur', color: 'from-cyan-400 to-blue-500' },
    { name: 'Energía BB', color: 'from-yellow-400 to-orange-500' },
    { name: 'Sistemas S.A', color: 'from-purple-400 to-pink-500' },
    { name: 'Gen Central', color: 'from-red-400 to-rose-600' },
    { name: 'Mant. Chile', color: 'from-gray-400 to-slate-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* --- CINTURÓN INFINITO DE CLIENTES --- */}
        <div className="mb-20 pb-12 border-b border-gray-800">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-gray-500 mb-10 font-semibold">
            Empresas que confían en GYC Mantención
          </p>
          
          <div className="relative overflow-hidden">
            {/* Máscara suave para fade en los bordes */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-infinite-scroll">
              {[clients, clients].map((clientGroup, groupIndex) => (
                <div key={groupIndex} className="flex shrink-0 space-x-16 items-center">
                  {clientGroup.map((client, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
                      <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-yellow-500/30">
                        <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center overflow-hidden border-2 border-gray-800">
                          <div className={`w-full h-full rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-black text-sm tracking-tighter`}>
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-widest group-hover:text-blue-400 transition-colors duration-300">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Sobre la empresa - columna más ancha en desktop */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Logo GYC Mantención" 
                className="h-14 w-auto object-contain drop-shadow-lg brightness-110" 
              />
              <div>
                <h3 className="text-2xl font-black leading-tight">
                  GYC Mantención
                </h3>
                <span className="text-blue-400 text-sm tracking-widest uppercase font-medium">SPA</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-base max-w-sm">
              Soluciones técnicas de calidad en mantenimiento industrial y montaje mecánico. 
              Expertise y compromiso en cada proyecto.
            </p>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Servicios</h3>
            <ul className="space-y-4">
              {[
                "Mantenimiento Mecánico",
                "Servicios Eléctricos",
                "Obras Civiles",
                "Estructuras Metálicas"
              ].map((servicio) => (
                <li key={servicio}>
                  <button 
                    onClick={() => setCurrentSection('servicios')} 
                    className="flex items-center gap-3 hover:text-white transition-all duration-300 group text-gray-300 text-left w-full"
                  >
                    <Settings className="w-5 h-5 text-blue-500 group-hover:rotate-90 transition-transform duration-500" /> 
                    <span className="text-sm font-medium">{servicio}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              {[
                { section: 'inicio', label: 'Inicio', icon: Home },
                { section: 'noticias', label: 'Noticias de la Empresa', icon: Newspaper, highlight: true },
                { section: 'servicios', label: 'Servicios', icon: Settings },
                { section: 'nosotros', label: 'Sobre Nosotros', icon: Users },
                { section: 'postulaciones', label: 'Trabaja con Nosotros', icon: Briefcase },
                { section: 'politicas', label: 'Políticas', icon: FileText },
                { section: 'contacto', label: 'Contacto', icon: MessageSquare },
              ].map(({ section, label, icon: Icon, highlight }) => (
                <li key={section}>
                  <button 
                    onClick={() => setCurrentSection(section as Section)} 
                    className={`flex items-center gap-3 hover:text-white transition-all duration-300 group text-gray-300 text-left w-full ${highlight ? 'text-blue-300 font-semibold' : ''}`}
                  >
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" /> 
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Contacto</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">
                  Santa Bárbara,<br />Región del Biobío, Chile
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <a href="tel:+56996919657" className="hover:text-white transition-colors font-medium">
                  +56 9 9691 9657
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:contacto@gycmantencion.cl" className="hover:text-white transition-colors font-medium break-all">
                  contacto@gycmantencion.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

              {/* --- CANAL DE DENUNCIAS --- */}
        <div className="mb-10 p-6 bg-gradient-to-r from-red-300 via-red-700 to-red-800 rounded-2xl shadow-lg border border-red-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Shield className="w-10 h-10 text-white shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-white">Canal de Denuncias</h4>
              <p className="text-red-200 text-sm">
                Tu voz es importante. Reporta cualquier conducta inapropiada de forma segura y confidencial.
              </p>
            </div>
          </div>
          <button
            onClick={() => setCurrentSection('denuncias')}
            className="bg-white text-red-700 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-red-50 transition-colors"
          >
            Ir al Canal de Denuncias
          </button>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="text-center text-gray-600 text-xs uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} GYC Mantención SPA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}