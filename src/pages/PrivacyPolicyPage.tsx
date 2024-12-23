import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PrivacyPolicy from '../components/sections/PrivacyPolicy';
import Footer from '../components/layout/Footer';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-300 hover:text-green-500 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para a página inicial
        </button>
      </div>
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}