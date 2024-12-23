import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors duration-300">
      <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-green-500" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}