import { MessageCircle, X, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../App';

interface FloatingContactButtonProps {
  setCurrentSection: (section: Section) => void;
}

export default function FloatingContactButton({ setCurrentSection }: FloatingContactButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group"
            aria-label="Abrir contacto rápido"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-white" />
                <h3 className="text-white font-semibold">Contacto Rápido</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-3">
              <a
                href="tel:+56996919657"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Llamar ahora</p>
                  <p className="font-semibold text-gray-900">+56 9 9691 9657</p>
                </div>
              </a>

              <a
                href="mailto:contacto@gycmantencion.cl"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900 text-sm">contacto@gycmantencion.cl</p>
                </div>
              </a>

              <button
                onClick={() => {
                  setCurrentSection('contacto');
                  setIsOpen(false);
                }}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group text-left"
              >
                <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                  <Send className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Formulario</p>
                  <p className="font-semibold text-gray-900">Ir a Contacto</p>
                </div>
              </button>
            </div>

            <div className="bg-gray-50 p-3 text-center">
              <p className="text-xs text-gray-500">
                Horario: Lunes a Viernes 8:00 - 18:00
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
