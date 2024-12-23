import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-300 text-sm flex-1">
            <p className="mb-2">
              Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nosso site, 
              personalizar anúncios e analisar nosso tráfego. Ao clicar em "Aceitar", você concorda com o 
              uso de cookies conforme descrito em nossa{' '}
              <a href="/politica-privacidade" className="text-green-500 hover:text-green-400 underline">
                Política de Privacidade
              </a>
              .
            </p>
            <p>
              Este site segue as diretrizes da Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAccept}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors whitespace-nowrap"
            >
              Aceitar Cookies
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}