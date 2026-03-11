import React from 'react';
import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card = ({ children, hover = false, className = '' }: CardProps) => {
  return (
    <div className={`bg-white border-4 border-blue-900 shadow-[8px_8px_0px_0px_rgba(30,58,138,1)] ${hover ? 'hover:shadow-[4px_4px_0px_0px_rgba(30,58,138,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200' : ''} ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-6 border-b-4 border-blue-900 bg-blue-50 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-6 border-t-4 border-blue-900 bg-blue-50 ${className}`}>{children}</div>
);
