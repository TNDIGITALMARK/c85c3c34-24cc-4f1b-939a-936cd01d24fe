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
    description: 'Traditional haircut with precision styling and finishing touches',
    backgroundImage: '/generated/classic-cut-bg.png'
  },
  {
    title: 'BEARD TRIM',
    duration: '20 minutes',
    price: '$25',
    description: 'Expert beard shaping and grooming for a clean, sharp look',
    backgroundImage: '/generated/beard-trim-bg.png'
  },
  {
    title: 'FULL SERVICE',
    duration: '45 minutes',
    price: '$55',
    description: 'Complete haircut and beard trim package with hot towel treatment',
    backgroundImage: '/generated/full-service-bg.png'
  },
  {
    title: 'HOT TOWEL SHAVE',
    duration: '25 minutes',
    price: '$40',
    description: 'Classic straight razor shave with hot towel and premium products',
    backgroundImage: '/generated/hot-towel-shave-bg.png'
  },
  {
    title: 'FATHER & SON',
    duration: '60 minutes',
    price: '$65',
    description: 'Special package for father and son, creating memories together',
    backgroundImage: '/generated/father-son-bg.png'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] mt-16 md:mt-20">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-barbershop.png"
            alt="Ando Kutz Barbershop Interior"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="font-logo text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-4 drop-shadow-lg">
              ANDO KUTZ
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 drop-shadow-md px-2">
              Premium Barbering in Louisville, Kentucky
            </p>
            <Link
              href="/book"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[hsl(var(--gold))] gold-button-text font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button active:scale-95 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">OUR SERVICES</h2>
            <div className="w-20 sm:w-24 h-1 bg-[hsl(var(--gold))] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[hsl(var(--light-gray))] text-base sm:text-lg max-w-2xl mx-auto px-4">
              Expert barbering services tailored to your style and grooming needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                duration={service.duration}
                price={service.price}
                description={service.description}
                backgroundImage={service.backgroundImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[hsl(var(--charcoal))]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Meet Andy Vu</h2>
              <p className="text-[hsl(var(--light-gray))] text-base sm:text-lg mb-6 leading-relaxed">
                With over a decade of experience in premium barbering, Andy Vu brings
                traditional techniques and modern style to every cut. Based in Louisville,
                Kentucky, Ando Kutz is your destination for professional grooming excellence.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 sm:px-8 py-3 bg-transparent border-2 border-[hsl(var(--gold))] text-gold font-semibold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--gold))] hover:gold-button-text transition-all touch-manipulation min-h-[48px] flex items-center justify-center w-full sm:w-auto"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-4 sm:p-6 lg:p-8 rounded text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1 sm:mb-2">10+</div>
                <div className="text-[hsl(var(--light-gray))] text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-4 sm:p-6 lg:p-8 rounded text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1 sm:mb-2">1000+</div>
                <div className="text-[hsl(var(--light-gray))] text-xs sm:text-sm">Happy Clients</div>
              </div>
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-4 sm:p-6 lg:p-8 rounded text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1 sm:mb-2">5★</div>
                <div className="text-[hsl(var(--light-gray))] text-xs sm:text-sm">Average Rating</div>
              </div>
              <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] p-4 sm:p-6 lg:p-8 rounded text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold mb-1 sm:mb-2">100%</div>
                <div className="text-[hsl(var(--light-gray))] text-xs sm:text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready for Your Next Cut?</h2>
          <p className="text-[hsl(var(--light-gray))] text-base sm:text-lg mb-6 sm:mb-8 px-4">
            Book your appointment today and experience premium barbering at its finest
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/book"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-[hsl(var(--gold))] gold-button-text font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-[hsl(var(--gold))] text-gold font-semibold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--gold))] hover:gold-button-text transition-all touch-manipulation min-h-[48px] flex items-center justify-center"
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