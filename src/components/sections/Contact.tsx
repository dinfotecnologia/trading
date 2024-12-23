import React from 'react';
import ContactForm from '../forms/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Entre em Contato
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}