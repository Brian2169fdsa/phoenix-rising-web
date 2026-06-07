'use client';
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({ label, error, id, className, ...rest }: TextareaProps) {
  return (
    <div className="ds-input-wrap">
      {label && (
        <label className="ds-input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`ds-input${error ? ' error' : ''}${className ? ` ${className}` : ''}`}
        {...rest}
      />
      {error && <span className="ds-input-error">{error}</span>}
    </div>
  );
}
