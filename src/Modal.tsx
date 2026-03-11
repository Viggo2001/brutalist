import React from 'react';
import { ReactNode, useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-blue-600/30" onClick={onClose} />
      <div className="relative bg-white border-4 border-blue-900 shadow-[12px_12px_0px_0px_rgba(30,58,138,1)] max-w-lg w-full max-h-[90vh] overflow-auto">
        {title && (
          <div className="px-6 py-4 border-b-4 border-blue-900 bg-blue-50">
            <h2 className="text-xl font-bold uppercase tracking-wide text-blue-900">{title}</h2>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
