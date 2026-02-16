import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { cn } from '../lib/utils';

interface TrialModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TrialModal({ open, onOpenChange }: TrialModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly to schedule your free trial.');
    onOpenChange(false);
    setFormData({ name: '', email: '', phone: '', program: '' });
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-x-4 top-4 bottom-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-lg overflow-y-auto">
          <div className="bg-card rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <Dialog.Title className="text-xl sm:text-2xl font-bold">
                Book Your Free Trial
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-2 rounded-lg hover:bg-accent transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Description className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Take the first step on your BJJ journey. Fill out the form below and we'll contact you to schedule your free trial class.
            </Dialog.Description>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Input
                label="Phone"
                type="tel"
                placeholder="(905) 555-0123"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Program Interest
                </label>
                <select
                  className={cn(
                    'w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border-2 border-border bg-background text-sm sm:text-base',
                    'focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent',
                    'transition-all duration-200'
                  )}
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                >
                  <option value="">Select a program</option>
                  <option value="kids-5-8">Kids (5-8 Years)</option>
                  <option value="kids-8-13">Kids (8-13 Years)</option>
                  <option value="adult-teen">Adult & Teen</option>
                  <option value="womens">Women's Program</option>
                </select>
              </div>

              <div className="flex gap-3 pt-3 sm:pt-4">
                <Button type="submit" size="md" className="flex-1">
                  Submit
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="md"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
