import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Award, Users, Heart, Scissors, MapPin, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-12 mt-20 bg-[hsl(var(--charcoal))]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">About Andy Vu</h1>
          <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--light-gray))] text-lg">
            Master Barber & Founder of Ando Kutz
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/generated/hero-barbershop.png"
                alt="Andy Vu at Ando Kutz"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">The Ando Kutz Story</h2>
              <div className="space-y-4 text-[hsl(var(--light-gray))] text-lg leading-relaxed">
                <p>
                  Andy Vu founded Ando Kutz with a simple vision: to bring traditional barbering
                  excellence to the heart of Louisville, Kentucky. With over a decade of experience
                  honing his craft, Andy has become known for his meticulous attention to detail
                  and dedication to customer satisfaction.
                </p>
                <p>
                  Starting his journey in barbering at a young age, Andy trained under master
                  barbers and perfected the art of classic cuts, precision fades, and traditional
                  straight razor shaves. His passion for the craft shows in every haircut,
                  every conversation, and every client who walks out feeling their best.
                </p>
                <p>
                  At Ando Kutz, we believe barbering is more than just a haircut—it's about
                  building relationships, creating confidence, and preserving the timeless
                  traditions of men's grooming while embracing modern style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--charcoal))]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center">
                <Scissors className="text-black" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Craftsmanship</h3>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Every cut is executed with precision and care, treating each client's hair as a canvas
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center">
                <Heart className="text-black" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                We love what we do, and it shows in the quality of service we provide every day
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center">
                <Users className="text-black" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Community</h3>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Building lasting relationships with our clients and being a pillar of Louisville
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[hsl(var(--gold))] rounded-full flex items-center justify-center">
                <Award className="text-black" size={36} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Continuously improving our skills and staying ahead of trends and techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Experience & Training</h2>
            <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] p-8 rounded-lg">
              <div className="text-gold font-bold text-3xl mb-2">10+</div>
              <div className="text-white font-semibold text-lg mb-2">Years Experience</div>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Over a decade of professional barbering excellence
              </p>
            </div>

            <div className="bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] p-8 rounded-lg">
              <div className="text-gold font-bold text-3xl mb-2">Licensed</div>
              <div className="text-white font-semibold text-lg mb-2">Master Barber</div>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Kentucky State Board certified and continuously trained
              </p>
            </div>

            <div className="bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] p-8 rounded-lg">
              <div className="text-gold font-bold text-3xl mb-2">1000+</div>
              <div className="text-white font-semibold text-lg mb-2">Happy Clients</div>
              <p className="text-[hsl(var(--light-gray))] text-sm">
                Building trust one haircut at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--charcoal))]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">Location</h3>
                  <p className="text-[hsl(var(--light-gray))]">123 Main Street</p>
                  <p className="text-[hsl(var(--light-gray))]">Louisville, KY 40202</p>
                  <p className="text-[hsl(var(--light-gray))] text-sm mt-2">
                    Easy parking available • Walk-ins welcome
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-gold flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">Hours</h3>
                  <div className="space-y-1 text-[hsl(var(--light-gray))]">
                    <p>Tuesday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday - Monday: Closed</p>
                  </div>
                </div>
              </div>

              <Link
                href="/book"
                className="inline-block px-10 py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button"
              >
                Book Your Appointment
              </Link>
            </div>

            <div className="bg-[hsl(var(--black))] border border-[hsl(var(--gold))] rounded-lg p-4 h-[400px] flex items-center justify-center">
              <p className="text-[hsl(var(--light-gray))] text-center">
                Map placeholder - Louisville, KY location
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
