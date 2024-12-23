import React from 'react';

interface PlatformCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonUrl: string;
}

const PlatformCard = ({ title, description, imageUrl, buttonUrl }: PlatformCardProps) => (
  <div className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300">
    <div className="h-48 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-contain p-4"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={buttonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Clique Aqui
      </a>
    </div>
  </div>
);

export default function TradingPlatforms() {
  const platforms = [
    {
      title: "NinjaTrader",
      description: "Plataforma profissional de trading com recursos avançados de análise técnica, backtesting e automação. Ideal para traders que buscam uma solução completa para operar nos mercados futuros.",
      imageUrl: "https://od.lk/s/NTJfNDc2MTA1MzBf/NinjaTrader_Wordmark_color_RGB.png",
      buttonUrl: "https://ninjatrader.com/",
    },
    {
      title: "Kinetick",
      description: "Fornecedor líder de dados de mercado em tempo real, oferecendo feeds de alta qualidade e baixa latência para diversos mercados financeiros. Integração perfeita com a NinjaTrader.",
      imageUrl: "https://od.lk/s/NTJfNDc2MTA1Mjlf/Kinetick_Logo.png",
      buttonUrl: "https://www.kinetick.com/",
    },
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Plataformas Parceiras
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
}