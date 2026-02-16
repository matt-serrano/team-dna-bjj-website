import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white shadow-lg shadow-[var(--accent-primary)]/20 hover:shadow-xl hover:shadow-[var(--accent-primary)]/30 hover:-translate-y-0.5',
    secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
    outline: 'border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-lg',
    md: 'px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl',
    lg: 'px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
