import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'bordered' | 'flat';
  hover?: boolean;
  children: React.ReactNode;
}

export function Card({ 
  variant = 'elevated', 
  hover = false,
  className, 
  children, 
  ...props 
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    elevated: 'bg-card shadow-lg dark:shadow-none dark:bg-card/50 dark:backdrop-blur-sm',
    bordered: 'bg-card border-2 border-border',
    flat: 'bg-card',
  };
  
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer' : '';
  
  return (
    <div
      className={cn(baseStyles, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4 pb-3 sm:p-6 sm:pb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4 pt-0 sm:p-6 sm:pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4 pt-3 sm:p-6 sm:pt-4', className)} {...props}>
      {children}
    </div>
  );
}
