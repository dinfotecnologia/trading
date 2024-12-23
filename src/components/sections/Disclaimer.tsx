import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Declaração de Risco</h2>
          </div>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Os produtos, serviços e informações fornecidos por este site são exclusivamente para fins educacionais 
              e de desenvolvimento de estratégias relacionadas a trading e investimentos. Não constituem recomendações 
              financeiras, jurídicas ou de investimento.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Risco de Mercado:</h3>
              <p>
                O trading de ativos financeiros, como ações, opções, futuros, criptomoedas e outros instrumentos, 
                envolve risco significativo de perda. Não há garantia de resultados ou lucros futuros. O desempenho 
                passado não é indicativo de resultados futuros.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Responsabilidade Pessoal:</h3>
              <p>
                É importante que você compreenda totalmente os riscos envolvidos antes de decidir participar de 
                qualquer atividade de trading ou investimento. Você deve avaliar cuidadosamente seus objetivos 
                financeiros, nível de experiência e tolerância ao risco.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Consultoria Profissional:</h3>
              <p>
                Recomendamos que você procure aconselhamento de um consultor financeiro ou profissional qualificado 
                antes de tomar qualquer decisão de investimento. Este site não é responsável por perdas decorrentes 
                de decisões baseadas em informações ou materiais fornecidos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Limitação de Responsabilidade:</h3>
              <p>
                Os desenvolvedores e proprietários deste site não serão responsáveis por quaisquer perdas ou danos, 
                incluindo, sem limitação, perdas financeiras, emocionais ou de qualquer outro tipo, que possam 
                resultar da utilização dos produtos, serviços ou informações disponibilizados.
              </p>
            </div>

            <p className="font-semibold text-white">
              Ao acessar este site, você confirma que leu e compreendeu este aviso de risco e aceita os termos e 
              condições associados ao uso dos nossos serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}