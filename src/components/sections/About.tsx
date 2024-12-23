import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sobre Nós
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa especializada em soluções de TI, com anos de experiência
            no mercado. Nossa equipe é formada por profissionais qualificados e
            comprometidos com a excelência no atendimento e na prestação de serviços.
          </p>
        </div>
      </div>
    </section>
  );
}