import React from 'react';
import Image from 'next/image';

interface GlassSlotProps {
  ratio?: string;
  src?: string;
  label?: string;
  badge?: React.ReactNode;
  glint?: boolean;
  style?: React.CSSProperties;
  slotStyle?: React.CSSProperties;
}

export default function GlassSlot({
  ratio = '4/3',
  src,
  label,
  badge,
  glint = true,
  style,
  slotStyle,
}: GlassSlotProps) {
  return (
    <div
      className="glasswrap"
      style={{ aspectRatio: ratio, ...style }}
    >
      {src && (
        <Image
          src={src}
          alt={label ?? ''}
          fill
          style={{ objectFit: 'cover', ...slotStyle }}
        />
      )}
      <div className="glasswrap__streak" />
      {glint && <div className="glasswrap__glint" />}
      {badge && <div className="glasswrap__badge">{badge}</div>}
    </div>
  );
}
