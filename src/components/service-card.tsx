import { Clock, DollarSign } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  duration: string;
  price: string;
  description?: string;
  backgroundImage?: string;
}

export function ServiceCard({ title, duration, price, description, backgroundImage }: ServiceCardProps) {
  return (
    <div className="relative bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] rounded-lg overflow-hidden p-6 sm:p-8 hover:shadow-md transition-all duration-300 active:scale-[0.98] md:hover:scale-[1.02] group touch-manipulation">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          {/* Dark overlay for text readability - darker on hover */}
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300 z-0" />
        </>
      )}

      {/* Content - positioned above background */}
      <div className="relative z-10 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-gold transition-colors">
          {title}
        </h3>

        {description && (
          <p className="text-[hsl(var(--light-gray))] text-sm mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-5">
          <div className="flex items-center gap-2">
            <Clock className="text-gold w-4 h-4" />
            <span className="text-[hsl(var(--light-gray))] text-sm">{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="text-gold w-4 h-4" />
            <span className="text-gold font-bold text-lg">{price}</span>
          </div>
        </div>

        <button className="mt-4 px-6 py-2.5 sm:py-2 bg-[hsl(var(--gold))] gold-button-text font-semibold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-colors shadow-button w-full sm:w-auto min-h-[44px] sm:min-h-0 touch-manipulation">
          Book Now
        </button>
      </div>
    </div>
  );
}
