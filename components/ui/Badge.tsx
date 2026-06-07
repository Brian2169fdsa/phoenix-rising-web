import React from 'react';

interface BadgeProps {
  tone?: 'primary' | 'success' | 'ember' | 'neutral';
  children: React.ReactNode;
}

export default function Badge({ tone = 'primary', children }: BadgeProps) {
  return (
    <span className={`ds-badge ds-badge--${tone}`}>
      {children}
    </span>
  );
}
