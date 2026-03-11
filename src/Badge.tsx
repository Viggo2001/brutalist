import React from 'react';
import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
}

export const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => {
  const variants = {
    default: 'bg-blue-600 text-white border-blue-900 shadow-[2px_2px_0px_0px_rgba(30,58,138,1)]',
    success: 'bg-green-500 text-white border-green-900 shadow-[2px_2px_0px_0px_rgba(20,83,45,1)]',
    warning: 'bg-amber-500 text-white border-amber-900 shadow-[2px_2px_0px_0px_rgba(120,53,15,1)]',
    info: 'bg-sky-500 text-white border-sky-900 shadow-[2px_2px_0px_0px_rgba(12,74,110,1)]'
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wide border-2 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
