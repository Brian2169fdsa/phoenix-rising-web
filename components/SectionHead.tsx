import React from 'react';
import Eyebrow from '@/components/Eyebrow';

interface SectionHeadProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  center?: boolean;
  children?: React.ReactNode;
}

export default function SectionHead({
  eyebrow,
  title,
  accent,
  lead,
  center,
  children,
}: SectionHeadProps) {
  return (
    <div className={`section__head${center ? ' section__head--center' : ''}`}>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <h2 className="section__title">
        {title}
        {accent && <span className="accent"> {accent}</span>}
      </h2>
      {lead && <p className="section__lead">{lead}</p>}
      {children}
    </div>
  );
}
