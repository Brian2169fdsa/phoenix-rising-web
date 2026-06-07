'use client';
import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

type SelectOptionInput = SelectOption | string;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  options: SelectOptionInput[];
}

function normalize(opt: SelectOptionInput): SelectOption {
  return typeof opt === 'string' ? { value: opt, label: opt } : opt;
}

export default function Select({ label, error, hint, placeholder, options, id, className, ...rest }: SelectProps) {
  return (
    <div className="ds-input-wrap">
      {label && (
        <label className="ds-input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        className={`ds-input${error ? ' error' : ''}${className ? ` ${className}` : ''}`}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => {
          const o = normalize(opt);
          return (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          );
        })}
      </select>
      {hint && <span className="ds-input-hint">{hint}</span>}
      {error && <span className="ds-input-error">{error}</span>}
    </div>
  );
}
