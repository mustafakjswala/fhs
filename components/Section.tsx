import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: 'white' | 'gray' | 'primary';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-brand-light',
    primary: 'bg-brand-primary text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};