'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-12 mt-20 bg-[hsl(var(--charcoal))]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--light-gray))] text-lg">
            Get in touch with Ando Kutz - we're here to help
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                    <a
                      href="tel:2815558289"
                      className="text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-lg"
                    >
                      (281) 555-KUTZ
                    </a>
                    <p className="text-[hsl(var(--light-gray))] text-sm mt-1">
                      Call us during business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                    <a
                      href="mailto:info@andokutz.com"
                      className="text-[hsl(var(--light-gray))] hover:text-gold transition-colors text-lg"
                    >
                      info@andokutz.com
                    </a>
                    <p className="text-[hsl(var(--light-gray))] text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
                    <p className="text-[hsl(var(--light-gray))] text-lg">123 Main Street</p>
                    <p className="text-[hsl(var(--light-gray))] text-lg">Louisville, KY 40202</p>
                    <p className="text-[hsl(var(--light-gray))] text-sm mt-1">
                      Free parking available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-black" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Hours</h3>
                    <div className="space-y-1 text-[hsl(var(--light-gray))]">
                      <p>Tuesday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday - Monday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-[hsl(var(--gold))] text-black rounded-lg">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(281) 555-1234"
                      className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    rows={6}
                    className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--gold))] text-black font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
