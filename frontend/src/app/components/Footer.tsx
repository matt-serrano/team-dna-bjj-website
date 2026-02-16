import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-12 sm:mt-20">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-lg sm:text-xl font-bold tracking-tight">TEAM DNA BJJ</span>
              <span className="text-[9px] sm:text-[10px] text-muted-foreground tracking-[0.3em]">IT'S IN OUR GENES</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-[200px] mx-auto sm:mx-0">
              Building confidence, discipline, and community through Brazilian Jiu-Jitsu.
            </p>
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              <a href="https://www.facebook.com/TEAMDNABJJ" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/teamdnabjj/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.youtube.com/@TeamDNABJJ" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg hover:bg-accent transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-2 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Programs</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/programs/kids-5-8" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Kids (5-8 Years)
                </Link>
              </li>
              <li>
                <Link to="/programs/kids-8-13" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Kids (8-13 Years)
                </Link>
              </li>
              <li>
                <Link to="/programs/adult-teen" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Adult & Teen
                </Link>
              </li>
              <li>
                <Link to="/programs/womens" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Women's Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/schedule" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-[var(--accent-primary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact - always full width below links on mobile */}
        <div className="mt-6 sm:mt-0 lg:mt-0">
          <div className="max-w-md mx-auto sm:mx-0">
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>2001 Thickson Road South<br />Whitby, ON</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>(905) 555-0123</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>info@teamdnabjj.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p>© 2026 Team DNA BJJ. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-[var(--accent-primary)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--accent-primary)] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
