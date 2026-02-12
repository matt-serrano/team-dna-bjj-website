import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const programs = [
    { name: 'Kids (5-8 Years)', path: '/programs/kids-5-8' },
    { name: 'Kids (8-13 Years)', path: '/programs/kids-8-13' },
    { name: 'Adult & Teen', path: '/programs/adult-teen' },
    { name: "Women's Program", path: '/programs/womens' },
  ];

  const navItems = [
    { name: 'Schedule', path: '/schedule' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Team', path: '/team' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col items-center">
              <span className="text-2xl lg:text-3xl font-bold tracking-tight">TEAM DNA BJJ</span>
              <span className="text-xs text-muted-foreground tracking-[0.35em]">IT'S IN OUR GENES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                  "hover:text-[#0EA5E9] hover:bg-[#e9ebef]"
                )}
              >
                Programs
                <ChevronDown className="w-4 h-4" />
              </button>
              {programsOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-56"
                >
                  <div className="bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
                    {programs.map((program) => (
                      <Link
                        key={program.path}
                        to={program.path}
                        className={cn(
                          "block px-4 py-3 text-sm hover:bg-[#e9ebef] hover:text-[#0EA5E9] transition-all duration-200",
                          isActive(program.path) && "bg-[#e9ebef] text-[#0EA5E9]"
                        )}
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(item.path) 
                    ? "text-[#0EA5E9] bg-[#e9ebef]" 
                    : "hover:text-[#0EA5E9] hover:bg-[#e9ebef]"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* CTA Button */}
            <Button 
              size="md" 
              className="hidden lg:inline-flex"
              onClick={() => window.location.href = '#trial-modal'}
            >
              Book a Free Trial
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent hover:scale-110 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-2">
            {/* Programs Section */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                Programs
              </div>
              {programs.map((program) => (
                <Link
                  key={program.path}
                  to={program.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-6 py-2 text-sm transition-colors",
                    isActive(program.path)
                      ? "text-[var(--accent-primary)] bg-accent/50"
                      : "hover:bg-accent"
                  )}
                >
                  {program.name}
                </Link>
              ))}
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive(item.path)
                    ? "text-[var(--accent-primary)] bg-accent/50"
                    : "hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 px-4">
              <Button 
                size="md" 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '#trial-modal';
                }}
              >
                Book a Free Trial
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
