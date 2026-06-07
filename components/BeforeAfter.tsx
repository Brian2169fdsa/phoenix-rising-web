'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterProps {
  beforeLabel?: string;
  afterLabel?: string;
  ratio?: string;
  beforeSrc?: string;
  afterSrc?: string;
}

export default function BeforeAfter({
  beforeLabel = 'Before',
  afterLabel = 'After',
  ratio = '16/9',
  beforeSrc,
  afterSrc,
}: BeforeAfterProps) {
  const [split, setSplit] = useState(50);

  return (
    <div
      className="ba"
      style={{ aspectRatio: ratio, '--split': `${split}%` } as React.CSSProperties}
    >
      <div className="ba__layer">
        {beforeSrc && (
          <Image src={beforeSrc} alt={beforeLabel} fill style={{ objectFit: 'cover' }} />
        )}
      </div>
      <div className="ba__layer ba__after">
        {afterSrc && (
          <Image src={afterSrc} alt={afterLabel} fill style={{ objectFit: 'cover' }} />
        )}
      </div>
      <span className="ba__tag ba__tag--before">{beforeLabel}</span>
      <span className="ba__tag ba__tag--after">{afterLabel}</span>
      <div className="ba__handle">
        <div className="ba__grip" />
      </div>
      <input
        type="range"
        className="ba__range"
        min={0}
        max={100}
        value={split}
        onChange={(e) => setSplit(Number(e.target.value))}
        aria-label="Before/after slider"
      />
    </div>
  );
}
