import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { Check } from 'lucide-react';

const services = [
  {
    title: 'CLASSIC CUT',
    duration: '30 minutes',
    price: '$35',
    description: 'Traditional haircut with precision styling and finishing touches',
    includes: [
      'Consultation on style',
      'Expert scissor and clipper work',
      'Hot towel treatment',
      'Style finishing',
      'Product recommendations'
    ]
  },
  {
    title: 'BEARD TRIM',
    duration: '20 minutes',
    price: '$25',
    description: 'Expert beard shaping and grooming for a clean, sharp look',
    includes: [
      'Beard consultation',
      'Precision trimming',
      'Line-up and shaping',
      'Hot towel treatment',
      'Beard oil application'
    ]
  },
  {
    title: 'FULL SERVICE',
    duration: '45 minutes',
    price: '$55',
    description: 'Complete haircut and beard trim package with hot towel treatment',
    includes: [
      'Complete haircut',
      'Full beard trim & shape',
      'Hot towel treatment',
      'Style finishing',
      'Premium product application'
    ]
  },
  {
    title: 'HOT TOWEL SHAVE',
    duration: '25 minutes',
    price: '$40',
    description: 'Classic straight razor shave with hot towel and premium products',
    includes: [
      'Pre-shave hot towel',
      'Straight razor shave',
      'Multiple hot towel applications',
      'Post-shave balm',
      'Facial massage'
    ]
  },
  {
    title: 'FATHER & SON',
    duration: '60 minutes',
    price: '$65',
    description: 'Special package for father and son, creating memories together',
    includes: [
      'Two complete haircuts',
      'Side-by-side service',
      'Hot towel treatments',
      'Style consultations',
      'Photo opportunity'
    ]
  },
  {
    title: 'KIDS CUT',
    duration: '20 minutes',
    price: '$20',
    description: 'Haircut for children under 12 years old',
    includes: [
      'Patient, friendly service',
      'Expert kids cutting',
      'First haircut photos available',
      'Treats and rewards',
      'Style recommendations'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-12 mt-20 bg-[hsl(var(--charcoal))]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--light-gray))] text-lg">
            Premium barbering services crafted for the modern gentleman
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                duration={service.duration}
                price={service.price}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--charcoal))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What's Included</h2>
            <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-gold mb-2">{service.title}</h3>
                <p className="text-[hsl(var(--light-gray))] text-sm mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="text-gold flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-[hsl(var(--light-gray))] text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[hsl(var(--gold))] flex items-center justify-between">
                  <div>
                    <div className="text-gold font-bold text-2xl">{service.price}</div>
                    <div className="text-[hsl(var(--light-gray))] text-xs">{service.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Add-On Services</h2>
            <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
            <p className="text-[hsl(var(--light-gray))] text-lg">
              Enhance your service with these premium additions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] rounded-lg p-6 text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Hot Towel Treatment</h3>
              <p className="text-gold font-bold text-xl mb-3">+$10</p>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Relaxing hot towel service to enhance any cut
              </p>
            </div>

            <div className="bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] rounded-lg p-6 text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Premium Products</h3>
              <p className="text-gold font-bold text-xl mb-3">+$15</p>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Luxury grooming products for the ultimate finish
              </p>
            </div>

            <div className="bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] rounded-lg p-6 text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Scalp Massage</h3>
              <p className="text-gold font-bold text-xl mb-3">+$12</p>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Relaxing scalp massage to complete your experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-12 bg-[hsl(var(--charcoal))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book?</h2>
          <p className="text-[hsl(var(--light-gray))] text-lg mb-8">
            Experience the Ando Kutz difference. Book your appointment today.
          </p>
          <Link
            href="/book"
            className="inline-block px-12 py-4 bg-[hsl(var(--gold))] gold-button-text font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button hover:scale-105"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
