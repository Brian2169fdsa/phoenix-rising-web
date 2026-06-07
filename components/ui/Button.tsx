'use client';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
  style?: React.CSSProperties;
  className?: string;
}

function resolveIcon(icon: React.ReactNode | string | undefined, size = 16): React.ReactNode {
  if (!icon) return null;
  if (typeof icon === 'string') return <Icon name={icon} size={size} />;
  return icon;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  href,
  type = 'button',
  disabled,
  onClick,
  children,
  leftIcon,
  rightIcon,
  style,
  className,
}: ButtonProps) {
  const cls = [
    'ds-btn',
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    fullWidth ? 'ds-btn--full' : '',
    className || '',
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {resolveIcon(leftIcon)}
      {children}
      {resolveIcon(rightIcon)}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={cls} style={style} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} style={style}>
      {content}
    </button>
  );
}
