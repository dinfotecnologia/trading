import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Domine o Mercado Financeiro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Aprenda a operar no mercado financeiro com estratégias comprovadas e mentoria especializada
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}