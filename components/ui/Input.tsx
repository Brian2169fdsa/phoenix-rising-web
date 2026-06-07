'use client';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export default function Input({ label, error, hint, id, className, ...rest }: InputProps) {
  return (
    <div className="ds-input-wrap">
      {label && (
        <label className="ds-input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`ds-input${error ? ' error' : ''}${className ? ` ${className}` : ''}`}
        {...rest}
      />
      {error && <span className="ds-input-error">{error}</span>}
      {hint && !error && <span className="ds-input-hint">{hint}</span>}
    </div>
  );
}
