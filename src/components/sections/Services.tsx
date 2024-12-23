import React from 'react';
import ServiceCard from '../ServiceCard';
import { LineChart, BarChart, Bot } from 'lucide-react';

const servicesData = [
  {
    Icon: LineChart,
    title: "Dados de Mercado Histórico",
    description: "Acesso a dados históricos detalhados para análise aprofundada e tomada de decisão informada"
  },
  {
    Icon: BarChart,
    title: "Indicadores Técnicos",
    description: "Conjunto completo de indicadores técnicos para análise avançada e identificação de oportunidades"
  },
  {
    Icon: Bot,
    title: "Robôs e Automação de Trading",
    description: "Desenvolvimento e implementação de estratégias automatizadas para operações consistentes"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}