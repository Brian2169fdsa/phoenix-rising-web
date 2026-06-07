import React from 'react';
import Icon from '@/components/Icon';
import Button from './Button';

interface PricingTierProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  featured?: boolean;
  cta?: string;
  ctaHref?: string;
  ctaLabel?: string;
  flag?: string;
  children?: React.ReactNode;
}

export default function PricingTier({
  name,
  price,
  period,
  description,
  features,
  featured,
  cta,
  ctaHref = '/booking',
  ctaLabel,
  flag,
  children,
}: PricingTierProps) {
  const ctaText = cta ?? ctaLabel ?? 'Book Now';

  return (
    <div className={`pricing-tier${featured ? ' pricing-tier--featured' : ''}`}>
      {flag && <span className="pricing-tier__flag">{flag}</span>}
      <div className="pricing-tier__name">{name}</div>
      <div className="pricing-tier__price">
        {price}
        {period && <span className="pricing-tier__period"> {period}</span>}
      </div>
      {description && <p className="pricing-tier__desc">{description}</p>}
      <ul className="pricing-tier__features">
        {features.map((f) => (
          <li key={f}>
            <Icon name="check" size={16} />
            {f}
          </li>
        ))}
      </ul>
      {children}
      <div className="pricing-tier__cta">
        <Button
          variant={featured ? 'primary' : 'secondary'}
          fullWidth
          href={ctaHref}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
