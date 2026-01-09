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
// Asegúrate de que la ruta del logo sea correcta según tu estructura de carpetas
import logo from '../image/logo-e1727654075501.png'; 

interface FooterProps {
  setCurrentSection: (section: Section) => void;
}

export default function Footer({ setCurrentSection }: FooterProps) {
  // Lista de clientes con sus estilos de círculo
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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 pb-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECCIÓN: CINTURÓN INFINITO DE CLIENTES --- */}
        <div className="mb-16 pb-8 border-b border-gray-700/50">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-bold">
            Empresas que confían en GYC Mantención
          </p>
          <div className="flex overflow-hidden relative">
            <div className="flex space-x-12 animate-infinite-scroll whitespace-nowrap items-center py-2">
              {[...clients, ...clients].map((client, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className="w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    <div className="w-full h-full rounded-full bg-gray-900 p-1 flex items-center justify-center overflow-hidden">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-black text-[10px] text-center leading-tight`}>
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID PRINCIPAL DEL FOOTER --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* SOBRE LA EMPRESA CON LOGO */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Logo GYC" 
                className="h-12 w-auto object-contain brightness-110" 
              />
              <h3 className="text-xl font-bold leading-tight">
                GYC Mantención <span className="text-blue-400 block text-xs tracking-widest uppercase">SPA</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Soluciones técnicas de calidad en mantenimiento industrial y montaje mecánico. 
              Expertise y compromiso en cada proyecto.
            </p>
          </div>

          {/* SERVICIOS CON ICONOS (VINCULADOS A SECCIÓN SERVICES) */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 font-semibold">Servicios</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Mantenimiento Mecánico",
                "Servicios Eléctricos",
                "Obras Civiles",
                "Estructuras Metálicas"
              ].map((servicio) => (
                <li key={servicio}>
                  <button 
                    onClick={() => setCurrentSection('servicios')} 
                    className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left w-full group"
                  >
                    <Settings className="w-4 h-4 text-blue-500 group-hover:rotate-45 transition-transform duration-300" /> 
                    {servicio}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ENLACES RÁPIDOS CON ICONOS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <button onClick={() => setCurrentSection('inicio')} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left">
                  <Home className="w-4 h-4" /> Inicio
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('noticias')} className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors cursor-pointer font-bold">
                  <Newspaper className="w-4 h-4" /> Noticias de la Empresa
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('servicios')} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left">
                  <Settings className="w-4 h-4" /> Servicios
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('nosotros')} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left">
                  <Users className="w-4 h-4" /> Sobre Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('postulaciones')} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left">
                  <Briefcase className="w-4 h-4" /> Trabaja con Nosotros
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('politicas')} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left">
                  <FileText className="w-4 h-4" /> Políticas
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentSection('contacto')} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer text-left">
                  <MessageSquare className="w-4 h-4" /> Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* CONTACTO CON ICONOS */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 font-semibold">Contacto</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <span>Santa Barbara, Región del Biobío, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <a href="tel:+56996919657" className="hover:text-white transition-colors">
                  +56 9 9691 9657
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:contacto@gycmantencion.cl" className="hover:text-white transition-colors">
                  contacto@gycmantencion.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CANAL DE DENUNCIAS (RESALTADO) */}
        <div className="border-t border-gray-700 pt-8 mb-6">
          <div className="bg-gray-800/50 p-4 rounded-xl flex flex-col md:flex-row items-center justify-center gap-4 border border-gray-700">
            <Shield className="w-6 h-6 text-amber-400 animate-pulse" />
            <div className="text-center md:text-left text-sm">
              <p className="text-gray-300">
                ¿Necesitas reportar una irregularidad?{' '}
                <strong className="text-white">Canal de Denuncias Confidencial:</strong>{' '}
                <a
                  href="mailto:denuncias@gycmantencion.cl"
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors underline decoration-amber-400/30 underline-offset-4"
                >
                  denuncias@gycmantencion.cl
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CRÉDITOS FINALES */}
        <div className="text-center text-gray-500 text-[10px] uppercase tracking-[0.2em] mt-8">
          <p>
            &copy; {new Date().getFullYear()} GYC Mantención SPA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}