import React from 'react';
import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 border-3 border-blue-900 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(30,58,138,1)] transition-all bg-white text-gray-900 placeholder:text-gray-500 font-medium ${error ? 'border-red-600 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]' : 'shadow-[2px_2px_0px_0px_rgba(30,58,138,1)]'} ${className}`}
          {...props}
        />
        {error && <p className="mt-2 text-xs font-bold uppercase text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
