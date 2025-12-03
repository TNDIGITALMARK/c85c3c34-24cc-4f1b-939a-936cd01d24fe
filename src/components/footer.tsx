import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--black))] border-t border-[hsl(var(--gold))] py-10 sm:py-12 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8">
          {/* Logo and Tagline */}
          <div className="text-center sm:text-left">
            <h3 className="font-logo text-xl sm:text-2xl text-gold mb-3">ANDO KUTZ</h3>
            <p className="text-[hsl(var(--light-gray))] text-sm leading-relaxed">
              Premium barbering services in Louisville, Kentucky.
              Professional cuts, timeless style.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a href="tel:2815558289" className="flex items-start gap-3 justify-center sm:justify-start hover:opacity-80 transition-opacity touch-manipulation">
                <Phone className="text-gold w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[hsl(var(--light-gray))] text-sm">(281) 555-KUTZ</p>
                  <p className="text-[hsl(var(--light-gray))] text-xs">Tap to call</p>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=123+Main+Street+Louisville+KY+40202"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 justify-center sm:justify-start hover:opacity-80 transition-opacity touch-manipulation"
              >
                <MapPin className="text-gold w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[hsl(var(--light-gray))] text-sm">123 Main Street</p>
                  <p className="text-[hsl(var(--light-gray))] text-sm">Louisville, KY 40202</p>
                </div>
              </a>
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <Clock className="text-gold w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[hsl(var(--light-gray))] text-sm">Tue - Sat: 9AM - 7PM</p>
                  <p className="text-[hsl(var(--light-gray))] text-sm">Sun - Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 max-w-xs mx-auto sm:max-w-none">
              <Link
                href="/"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm py-1 touch-manipulation"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm py-1 touch-manipulation"
              >
                Services
              </Link>
              <Link
                href="/book"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm py-1 touch-manipulation"
              >
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm py-1 touch-manipulation"
              >
                About Andy
              </Link>
              <Link
                href="/contact"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm py-1 touch-manipulation"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[hsl(var(--gold))] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(var(--light-gray))] text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ando Kutz. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <Link
              href="/privacy"
              className="text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-xs sm:text-sm touch-manipulation"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-xs sm:text-sm touch-manipulation"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
