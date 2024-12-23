import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Iniciante',
    message: '' // Campo para a mensagem
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Você precisará substituir com seu Service ID do EmailJS
        'YOUR_TEMPLATE_ID', // Você precisará substituir com seu Template ID do EmailJS
        {
          to_email: 'trading@dinfotecnologia.com.br',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          message: `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nExperiência: ${formData.experience}\nMensagem: ${formData.message}` // Incluindo a mensagem no corpo do email
        },
        'YOUR_PUBLIC_KEY' // Você precisará substituir com sua Public Key do EmailJS
      );

      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: 'Iniciante',
        message: '' // Limpa o campo mensagem após o envio
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800 p-8 rounded-lg">
      <Toaster position="top-right" />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
          Telefone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-300">
          Experiência com Trading
        </label>
        <select
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white focus:border-green-500 focus:ring-green-500"
        >
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4} // Tamanho maior para o campo de mensagem
          className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Quero Começar Agora'}
        </button>
      </div>
    </form>
  );
}
