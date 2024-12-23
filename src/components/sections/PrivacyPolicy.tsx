import React from 'react';
import { Shield } from 'lucide-react';

const PrivacySection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    {children}
  </div>
);

const ListSection = ({ items }: { items: string[] }) => (
  <ul className="list-disc ml-6 mt-2 text-gray-300">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default function PrivacyPolicy() {
  const collectedInfo = [
    'Visita nosso website',
    'Preenche formulários',
    'Se inscreve em nossa newsletter',
    'Interage com nossos serviços'
  ];

  const cookiesUsage = [
    'Lembrar suas preferências',
    'Entender como você usa nosso site',
    'Melhorar nossos serviços',
    'Fornecer conteúdo personalizado'
  ];

  const userRights = [
    'Acessar seus dados pessoais',
    'Corrigir dados incompletos ou inexatos',
    'Solicitar a exclusão de seus dados',
    'Revogar seu consentimento',
    'Solicitar a portabilidade dos dados'
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-12 w-12 text-green-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Política de Privacidade
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-300">
            <PrivacySection title="1. Informações Coletadas">
              <div>
                Coletamos informações quando você:
                <ListSection items={collectedInfo} />
              </div>
            </PrivacySection>

            <PrivacySection title="2. Uso de Cookies">
              <div>
                Utilizamos cookies para melhorar sua experiência de navegação. Os cookies nos ajudam a:
                <ListSection items={cookiesUsage} />
              </div>
            </PrivacySection>

            <PrivacySection title="3. Seus Direitos (LGPD)">
              <div>
                De acordo com a LGPD, você tem direito a:
                <ListSection items={userRights} />
              </div>
            </PrivacySection>

            <PrivacySection title="4. Segurança dos Dados">
              <div className="text-gray-300">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                pessoais contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.
              </div>
            </PrivacySection>

            <PrivacySection title="5. Contato">
              <div className="text-gray-300">
                Para exercer seus direitos ou esclarecer dúvidas sobre nossa política de privacidade, 
                entre em contato através do nosso formulário de contato ou pelo e-mail: privacy@dinfo.com.br
              </div>
            </PrivacySection>
          </div>
        </div>
      </div>
    </section>
  );
}