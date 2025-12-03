'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--black))] border-b border-[hsl(var(--gold))]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-logo text-2xl lg:text-3xl text-gold hover:text-[hsl(var(--light-gold))] transition-colors">
            ANDO KUTZ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold hover:text-[hsl(var(--light-gold))] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--charcoal))] border-t border-[hsl(var(--gold))]">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Services
            </Link>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-white hover:text-gold transition-colors uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
