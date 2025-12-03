import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';

export const dynamic = 'force-dynamic';

const services = [
  {
    title: 'CLASSIC CUT',
    duration: '30 minutes',
    price: '$35',
    description: 'Traditional haircut with precision styling and finishing touches'
  },
  {
    title: 'BEARD TRIM',
    duration: '20 minutes',
    price: '$25',
    description: 'Expert beard shaping and grooming for a clean, sharp look'
  },
  {
    title: 'FULL SERVICE',
    duration: '45 minutes',
    price: '$55',
    description: 'Complete haircut and beard trim package with hot towel treatment'
  },
  {
    title: 'HOT TOWEL SHAVE',
    duration: '25 minutes',
    price: '$40',
    description: 'Classic straight razor shave with hot towel and premium products'
  },
  {
    title: 'FATHER & SON',
    duration: '60 minutes',
    price: '$65',
    description: 'Special package for father and son, creating memories together'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] mt-20">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-barbershop.png"
            alt="Ando Kutz Barbershop Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-logo text-5xl lg:text-7xl text-white mb-4 drop-shadow-lg">
              ANDO KUTZ
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 drop-shadow-md">
              Premium Barbering in Louisville, Kentucky
            </p>
            <Link
              href="/book"
              className="inline-block px-10 py-4 bg-[hsl(var(--gold))] text-black font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
            <p className="text-[hsl(var(--light-gray))] text-lg max-w-2xl mx-auto">
              Expert barbering services tailored to your style and grooming needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* About Teaser Section */}
      <section className="py-20 px-6 lg:px-12 bg-[hsl(var(--charcoal))]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Meet Andy Vu</h2>
              <p className="text-[hsl(var(--light-gray))] text-lg mb-6 leading-relaxed">
                With over a decade of experience in premium barbering, Andy Vu brings
                traditional techniques and modern style to every cut. Based in Louisville,
                Kentucky, Ando Kutz is your destination for professional grooming excellence.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-transparent border-2 border-[hsl(var(--gold))] text-gold font-semibold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-8 rounded text-center">
                <div className="text-4xl font-bold text-gold mb-2">10+</div>
                <div className="text-[hsl(var(--light-gray))] text-sm">Years Experience</div>
              </div>
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-8 rounded text-center">
                <div className="text-4xl font-bold text-gold mb-2">1000+</div>
                <div className="text-[hsl(var(--light-gray))] text-sm">Happy Clients</div>
              </div>
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-8 rounded text-center">
                <div className="text-4xl font-bold text-gold mb-2">5★</div>
                <div className="text-[hsl(var(--light-gray))] text-sm">Average Rating</div>
              </div>
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-8 rounded text-center">
                <div className="text-4xl font-bold text-gold mb-2">100%</div>
                <div className="text-[hsl(var(--light-gray))] text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Next Cut?</h2>
          <p className="text-[hsl(var(--light-gray))] text-lg mb-8">
            Book your appointment today and experience premium barbering at its finest
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-10 py-4 bg-[hsl(var(--gold))] text-black font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 bg-transparent border-2 border-[hsl(var(--gold))] text-gold font-semibold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--gold))] hover:text-black transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}