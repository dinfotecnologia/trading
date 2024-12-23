import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
         <div className="flex items-center justify-center mb-6">
            <img 
              src="https://od.lk/s/NTJfNDc2MTA1NjVf/D-Info%20Logo%20%28Rev.1%29.png" 
              alt="Logo" 
              className="w-[350px] h-auto mt-6"
            />
          </div>
          <p className="text-gray-400 text-center max-w-md mb-6">
            Transformando iniciantes em traders profissionais através de educação e mentoria de qualidade
          </p>
          <p className="text-gray-500">
            © {new Date().getFullYear()} D-Info Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}