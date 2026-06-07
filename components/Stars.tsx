import React from 'react';
import Icon from '@/components/Icon';

interface StarsProps {
  value?: number;
  size?: number;
}

export default function Stars({ value = 5, size = 16 }: StarsProps) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          size={size}
          style={{
            fill: i < value ? 'var(--ember)' : 'var(--chrome-300)',
            color: i < value ? 'var(--ember)' : 'var(--chrome-300)',
          }}
        />
      ))}
    </div>
  );
}
