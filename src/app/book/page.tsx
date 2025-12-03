'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const services = [
  { name: 'Classic Cut', duration: '30 min', price: '$35' },
  { name: 'Beard Trim', duration: '20 min', price: '$25' },
  { name: 'Full Service', duration: '45 min', price: '$55' },
  { name: 'Hot Towel Shave', duration: '25 min', price: '$40' },
  { name: 'Father & Son Package', duration: '60 min', price: '$65' }
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'
];

export default function BookAppointment() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-12 mt-20 bg-[hsl(var(--charcoal))]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Book Your Appointment</h1>
          <div className="w-24 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--light-gray))] text-lg">
            Select your service, choose your time, and experience premium grooming
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--background))]">
        <div className="max-w-5xl mx-auto">
          {submitted && (
            <div className="mb-8 p-6 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Appointment Request Received!</h3>
              <p className="text-sm">We'll confirm your booking shortly via phone or email.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Selection */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
                <Clock className="text-gold" size={24} />
                Select Service
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => setSelectedService(service.name)}
                    className={`p-6 rounded border-2 transition-all text-left ${
                      selectedService === service.name
                        ? 'bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] border-[hsl(var(--gold))]'
                        : 'bg-[hsl(var(--charcoal))] text-white border-[hsl(var(--gold))] hover:bg-[hsl(var(--dark-gray))]'
                    }`}
                  >
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <div className="text-sm opacity-80">
                      <p>{service.duration}</p>
                      <p className="font-bold mt-1">{service.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
                <Calendar className="text-gold" size={24} />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border-2 border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                required
              />
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
                <Clock className="text-gold" size={24} />
                Select Time
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded border transition-all text-sm font-medium ${
                      selectedTime === time
                        ? 'bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] border-[hsl(var(--gold))]'
                        : 'bg-[hsl(var(--charcoal))] text-white border-[hsl(var(--gold))] hover:bg-[hsl(var(--dark-gray))]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-3">
                  <User className="text-gold" size={20} />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-3">
                  <Phone className="text-gold" size={20} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(281) 555-1234"
                  className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-3">
                <Mail className="text-gold" size={20} />
                Email Address
              </label>
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
              <label className="flex items-center gap-2 text-white font-semibold mb-3">
                <MessageSquare className="text-gold" size={20} />
                Additional Notes (Optional)
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any special requests or preferences?"
                rows={4}
                className="w-full p-4 bg-[hsl(var(--charcoal))] text-white border border-[hsl(var(--gold))] rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={!selectedService || !selectedDate || !selectedTime}
                className="px-12 py-4 bg-[hsl(var(--gold))] text-[hsl(var(--charcoal))] font-bold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-all shadow-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Appointment
              </button>
              <p className="text-[hsl(var(--light-gray))] text-sm mt-4">
                You'll receive a confirmation call or email within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 lg:px-12 bg-[hsl(var(--charcoal))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prefer to Call?</h2>
          <p className="text-[hsl(var(--light-gray))] text-lg mb-6">
            Call us directly to book your appointment or ask any questions
          </p>
          <a
            href="tel:2815558289"
            className="inline-block px-10 py-4 bg-transparent border-2 border-[hsl(var(--gold))] text-gold font-semibold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--charcoal))] transition-all"
          >
            Call (281) 555-KUTZ
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
