import {
  Newspaper,
  Trophy,
  HardHat,
  Calendar,
  Clock,
  Quote,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
  MapPin,
  ArrowRight,
  X,
  Search,
  FileText,
  Download,
  ShieldAlert,
  FileCheck,
  Zap,
  Users
} from 'lucide-react';
import { useState } from 'react';
import { Section } from '../App';

interface NewsProps {
  setCurrentSection: (section: Section) => void;
}

export default function News({ setCurrentSection }: NewsProps) {
  const [activeHito, setActiveHito] = useState(0);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  const stats = [
    { label: 'Horas Hombre Sin Accidentes', value: '45.000+', icon: HardHat, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Proyectos Finalizados 2024', value: '128', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Eficiencia Operativa', value: '+25%', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  // Recursos Legales Chilenos con Enlaces Reales y Exactos (BCN)
  const resources = [
    { 
      title: 'Ley Karin (Ley 21.643)', 
      subtitle: 'Acoso laboral y violencia',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1200096',
      type: 'OFICIAL BCN', 
      icon: ShieldAlert 
    },
    { 
      title: 'Ley 40 Horas (Ley 21.561)', 
      subtitle: 'Jornada laboral reducida',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1191554',
      type: 'OFICIAL BCN', 
      icon: Clock 
    },
    { 
      title: 'D.S. 594 (Sanitarias)', 
      subtitle: 'Condiciones ambientales',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=167766',
      type: 'REGLAMENTO', 
      icon: Zap 
    },
    { 
      title: 'Ley Accidentes (Ley 16.744)', 
      subtitle: 'Seguridad y salud laboral',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=28650',
      type: 'OFICIAL BCN', 
      icon: HardHat 
    },
    { 
      title: 'Inclusión (Ley 21.015)', 
      subtitle: 'Equidad laboral',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1104105',
      type: 'OFICIAL BCN', 
      icon: Users 
    },
    { 
      title: 'Ley SANNA (Ley 21.063)', 
      subtitle: 'Seguro acompañamiento hijos',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1113221',
      type: 'OFICIAL BCN', 
      icon: Calendar 
    },
    { 
      title: 'Conciliación (Ley 21.645)', 
      subtitle: 'Vida personal y laboral',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=1200373',
      type: 'OFICIAL BCN', 
      icon: CheckCircle2 
    },
    { 
      title: 'Código del Trabajo', 
      subtitle: 'Texto refundido actualizado',
      url: 'https://www.bcn.cl/leychile/navegar?idNorma=207436',
      type: 'COMPENDIO', 
      icon: FileCheck 
    },
  ];

  const blogPosts = [
    {
      date: '12 May, 2024',
      category: 'Seguridad',
      title: 'Nuevos protocolos de seguridad en trabajos de altura',
      excerpt: 'Implementamos tecnología de última generación para la prevención de riesgos en montajes industriales críticos...',
      author: 'Depto. Prevención'
    },
    {
      date: '05 May, 2024',
      category: 'Técnico',
      title: 'Mantenimiento preventivo vs correctivo',
      excerpt: 'Análisis detallado sobre los costos operativos y beneficios a largo plazo de las paradas programadas...',
      author: 'Ingeniería'
    },
    {
      date: '28 Abr, 2024',
      category: 'Normativa',
      title: 'Implementación Ley Karin en Faenas',
      excerpt: 'Guía práctica sobre la aplicación del nuevo protocolo de prevención de acoso en entornos industriales...',
      author: 'RR.HH.'
    },
    {
      date: '15 Abr, 2024',
      category: 'Innovación',
      title: 'Soldadura certificada en tuberías HDPE',
      excerpt: 'Nuevas técnicas de termofusión aplicadas en el proyecto Planta Biobío para mejorar la durabilidad...',
      author: 'Operaciones'
    }
  ];

  const fieldWorkImages = [
    {
      url: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Mantenimiento de Turbinas',
      location: 'Central Hidroeléctrica Angostura',
      details: ['Inspección mecánica', 'Alineación de ejes', 'Control de vibraciones']
    },
    {
      url: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Montaje Industrial',
      location: 'Planta Biobío',
      details: ['Soldadura certificada', 'Pruebas de presión', 'Montaje estructural']
    }
  ];

  return (
    <section id="noticias" className="py-24 bg-slate-50 min-h-screen pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER Y STATS */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Actualidad & Recursos</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                Centro de <span className="text-blue-600">Noticias</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60 hover:shadow-xl transition-all">
                <div className={`${stat.bg} ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <stat.icon size={28} />
                </div>
                <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUMNA PRINCIPAL (ARTÍCULOS) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* DESTACADO */}
            <div className="relative group overflow-hidden bg-slate-900 rounded-[2.5rem] shadow-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" className="w-32 h-32 rounded-2xl object-cover border-4 border-white/10" alt="Empleado"/>
              <div>
                <Quote className="text-amber-500 w-8 h-8 mb-2 opacity-50" />
                <p className="text-lg text-white mb-4 italic">"La seguridad no es una meta, es un camino que recorremos cada día."</p>
                <p className="text-xl font-bold text-white">Juan Pérez - Supervisor</p>
              </div>
            </div>

            {/* GRILLA DE ARTÍCULOS */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-slate-900">Artículos del Mes</h3>
                <button onClick={() => setIsBlogOpen(true)} className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:underline">
                  VER HISTORIAL <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, i) => (
                  <article key={i} className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all shadow-sm hover:shadow-md">
                    <span className="text-[10px] font-black bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-tighter">{post.category}</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{post.title}</h4>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400 font-bold border-t pt-4">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12}/> 3 min lectura</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA LATERAL (MARCO LEGAL) */}
          <div className="space-y-8">
            
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Marco Legal</h3>
              </div>
              
              {/* Contenedor con scroll si hay demasiadas leyes */}
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {resources.map((res, i) => (
                  <a 
                    key={i} 
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-600 transition-all cursor-pointer no-underline"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg text-slate-400 group-hover:text-blue-600 transition-colors shadow-sm">
                        <res.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors">{res.title}</p>
                        <p className="text-[10px] text-slate-400 group-hover:text-blue-100 uppercase font-black tracking-tighter">
                          {res.subtitle}
                        </p>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-slate-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-[10px] text-slate-400 italic text-center leading-tight">
                * Fuente: BCN Ley Chile. Actualizado a 2025.
              </p>
            </div>

            {/* HITOS DE OPERACIÓN */}
            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden">
               <div className="relative aspect-video">
                  <img src={fieldWorkImages[activeHito].url} className="w-full h-full object-cover opacity-60" alt="Hito"/>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-1">{fieldWorkImages[activeHito].location}</p>
                    <p className="text-white font-bold">{fieldWorkImages[activeHito].title}</p>
                  </div>
               </div>
               <div className="p-4 flex justify-between bg-slate-800">
                  <button onClick={() => setActiveHito(0)} className={`text-[10px] font-black transition-colors ${activeHito === 0 ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>01. ANGOSTURA</button>
                  <button onClick={() => setActiveHito(1)} className={`text-[10px] font-black transition-colors ${activeHito === 1 ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>02. BIOBÍO</button>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL DE HISTORIAL */}
      {isBlogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsBlogOpen(false)} />
          <div className="relative bg-white w-full max-w-4xl max-h-[85vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            <div className="p-10 border-b flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Archivo G&C</h3>
                <p className="text-slate-500 font-medium">Historial de actualizaciones técnicas y legales</p>
              </div>
              <button onClick={() => setIsBlogOpen(false)} className="bg-slate-200 p-3 rounded-full hover:bg-rose-500 hover:text-white transition-all">
                <X size={24} />
              </button>
            </div>
            <div className="overflow-y-auto p-10 space-y-8">
               {[1,2,3,4,5,6].map((n) => (
                 <div key={n} className="flex gap-6 items-start pb-8 border-b border-slate-100 last:border-0 hover:translate-x-2 transition-transform cursor-pointer group">
                    <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">0{n}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Comunicado Técnico de Operaciones #{n}</h4>
                      <p className="text-slate-500 text-sm mb-3">Resumen de cumplimiento normativo y mejoras en procesos de seguridad aplicados en terreno...</p>
                      <div className="flex gap-4 text-[10px] font-black text-slate-400 uppercase">
                        <span className="flex items-center gap-1"><Calendar size={12}/> Año 2024</span>
                        <span className="text-blue-600">Ver Detalles</span>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}