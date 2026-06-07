import React from 'react';
import Icon from '@/components/Icon';

interface TrustBadgeProps {
  icon: React.ReactNode | string;
  title: string;
  subtitle?: string;
  sub?: string;
}

export default function TrustBadge({ icon, title, subtitle, sub }: TrustBadgeProps) {
  const subText = subtitle ?? sub;
  return (
    <div className="trust-badge">
      <div className="trust-badge__icon">
        {typeof icon === 'string' ? <Icon name={icon} size={22} /> : icon}
      </div>
      <div>
        <div className="trust-badge__title">{title}</div>
        {subText && <div className="trust-badge__sub">{subText}</div>}
      </div>
    </div>
  );
}
