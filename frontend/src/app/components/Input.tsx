import React from 'react';
import { cn } from '../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border-2 border-border bg-background',
          'focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent',
          'transition-all duration-200',
          'placeholder:text-muted-foreground text-sm sm:text-base',
          error && 'border-destructive focus:ring-destructive',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border-2 border-border bg-background',
          'focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent',
          'transition-all duration-200',
          'placeholder:text-muted-foreground text-sm sm:text-base',
          'min-h-[100px] sm:min-h-[120px]',
          error && 'border-destructive focus:ring-destructive',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
