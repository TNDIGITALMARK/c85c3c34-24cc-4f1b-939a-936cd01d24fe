'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--black))] border-b border-[hsl(var(--gold))] safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Optimized for mobile */}
          <Link
            href="/"
            className="font-logo text-xl sm:text-2xl lg:text-3xl text-gold hover:text-[hsl(var(--light-gold))] transition-colors touch-manipulation"
            onClick={() => setMobileMenuOpen(false)}
          >
            ANDO KUTZ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-sm text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/book"
              className="text-sm text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="text-sm text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button - Enhanced touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold hover:text-[hsl(var(--light-gold))] transition-colors p-2 -mr-2 touch-manipulation"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full-screen overlay with smooth animation */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[hsl(var(--black))] transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-6 py-8 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-4 text-lg text-white hover:text-gold hover:bg-[hsl(var(--charcoal))] transition-all uppercase tracking-wide rounded-lg touch-manipulation"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-4 text-lg text-white hover:text-gold hover:bg-[hsl(var(--charcoal))] transition-all uppercase tracking-wide rounded-lg touch-manipulation"
            >
              Services
            </Link>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-4 text-lg bg-[hsl(var(--gold))] gold-button-text hover:bg-[hsl(var(--light-gold))] transition-all uppercase tracking-wide font-semibold rounded-lg text-center shadow-button touch-manipulation"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-4 text-lg text-white hover:text-gold hover:bg-[hsl(var(--charcoal))] transition-all uppercase tracking-wide rounded-lg touch-manipulation"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-4 text-lg text-white hover:text-gold hover:bg-[hsl(var(--charcoal))] transition-all uppercase tracking-wide rounded-lg touch-manipulation"
            >
              Contact
            </Link>
          </div>

          {/* Quick Contact in Mobile Menu */}
          <div className="px-6 pb-8 border-t border-[hsl(var(--gold))] pt-6 mt-6">
            <p className="text-[hsl(var(--light-gray))] text-sm mb-3 uppercase tracking-wide">Contact Us</p>
            <a
              href="tel:2815558289"
              className="block py-3 px-4 bg-[hsl(var(--charcoal))] text-gold hover:bg-[hsl(var(--dark-gray))] transition-colors rounded-lg text-center font-semibold touch-manipulation"
            >
              (281) 555-KUTZ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
