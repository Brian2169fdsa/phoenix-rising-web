import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function Eyebrow({ children, center }: EyebrowProps) {
  return (
    <span className={`eyebrow-c${center ? ' eyebrow-c--center' : ''}`}>
      {children}
    </span>
  );
}
