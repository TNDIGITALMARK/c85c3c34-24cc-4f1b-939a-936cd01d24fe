import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--black))] border-t border-[hsl(var(--gold))] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="font-logo text-2xl text-gold mb-3">ANDO KUTZ</h3>
            <p className="text-[hsl(var(--light-gray))] text-sm">
              Premium barbering services in Louisville, Kentucky.
              Professional cuts, timeless style.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="text-gold w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[hsl(var(--light-gray))] text-sm">(281) 555-KUTZ</p>
                  <p className="text-[hsl(var(--light-gray))] text-xs">Call to book</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-gold w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[hsl(var(--light-gray))] text-sm">123 Main Street</p>
                  <p className="text-[hsl(var(--light-gray))] text-sm">Louisville, KY 40202</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-gold w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[hsl(var(--light-gray))] text-sm">Tue - Sat: 9AM - 7PM</p>
                  <p className="text-[hsl(var(--light-gray))] text-sm">Sun - Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wide text-sm">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="/book"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm"
              >
                Book Appointment
              </Link>
              <Link
                href="/about"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm"
              >
                About Andy
              </Link>
              <Link
                href="/contact"
                className="block text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[hsl(var(--gold))] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(var(--light-gray))] text-sm">
            © {new Date().getFullYear()} Ando Kutz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
