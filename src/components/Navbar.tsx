import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarda a navegação ser concluída antes de rolar
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-center mb-6">
            <Link to="/">
              <img 
                src="https://od.lk/s/NTJfNDc2MTA1NjVf/D-Info%20Logo%20%28Rev.1%29.png" 
                alt="Logo" 
                className="h-10"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-green-500 transition-colors">Início</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-green-500 transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-500 transition-colors">Contato</button>
            <button onClick={() => scrollToSection('disclaimer')} className="text-gray-300 hover:text-green-500 transition-colors">Disclaimer</button>
            <Link 
              to="/politica-privacidade"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-300 hover:text-green-500 w-full text-left">Início</button>
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-300 hover:text-green-500 w-full text-left">Serviços</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-300 hover:text-green-500 w-full text-left">Contato</button>
            <button onClick={() => scrollToSection('disclaimer')} className="block px-3 py-2 text-gray-300 hover:text-green-500 w-full text-left">Disclaimer</button>
            <Link 
              to="/politica-privacidade"
              className="block px-3 py-2 text-gray-300 hover:text-green-500"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}