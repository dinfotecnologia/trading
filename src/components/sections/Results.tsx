import React from 'react';
import { CheckCircle } from 'lucide-react';

const results = [
  "Mais de 1000 alunos formados",
  "95% de aprovação dos alunos",
  "Média de retorno de 2.5% ao mês",
  "Suporte 24/7 via comunidade"
];

export default function Results() {
  return (
    <section id="results" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Resultados Comprovados
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa metodologia já ajudou centenas de pessoas a conquistarem sua independência financeira
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="flex items-center bg-slate-800 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
              <span className="ml-4 text-lg text-white">{result}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}