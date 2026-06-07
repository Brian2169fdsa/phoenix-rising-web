import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  featured?: boolean;
  glass?: boolean;
  style?: React.CSSProperties;
  'data-fade'?: boolean;
}

export default function Card({ children, className, interactive, featured, glass, style, ...rest }: CardProps) {
  const cls = [
    'ds-card',
    interactive ? 'ds-card--interactive' : '',
    featured ? 'ds-card--featured' : '',
    glass ? 'ds-card--glass' : '',
    className || '',
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} style={style} {...rest}>
      {children}
    </div>
  );
}
