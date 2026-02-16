import React from 'react';
import { cn } from '../lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'outline';
  size?: 'sm' | 'md';
  active?: boolean;
  children: React.ReactNode;
}

export function Chip({ 
  variant = 'default',
  size = 'md',
  active = false,
  className, 
  children, 
  ...props 
}: ChipProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap';
  
  const variants = {
    default: active 
      ? 'bg-[var(--accent-primary)] text-white' 
      : 'bg-muted text-muted-foreground hover:bg-accent',
    primary: 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20',
    outline: active
      ? 'border-2 border-[var(--accent-primary)] bg-[var(--accent-primary)] text-white'
      : 'border-2 border-border hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]',
  };
  
  const sizes = {
    sm: 'px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs rounded-full',
    md: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full',
  };
  
  return (
    <div
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
