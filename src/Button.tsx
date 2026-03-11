import React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-blue-600 text-white shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-blue-800',
    secondary: 'bg-white text-blue-600 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] hover:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] hover:translate-x-[2px] hover:translate-y-[2px] border-2 border-blue-600',
    outline: 'border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent',
    ghost: 'text-blue-600 hover:bg-blue-100 border-2 border-transparent hover:border-blue-600'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
