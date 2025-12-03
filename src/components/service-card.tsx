import { Clock, DollarSign } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  duration: string;
  price: string;
  description?: string;
}

export function ServiceCard({ title, duration, price, description }: ServiceCardProps) {
  return (
    <div className="bg-[hsl(var(--charcoal))] border border-[hsl(var(--gold))] rounded p-8 hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gold transition-colors">
          {title}
        </h3>

        {description && (
          <p className="text-[hsl(var(--light-gray))] text-sm mb-6 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="text-gold w-4 h-4" />
            <span className="text-[hsl(var(--light-gray))] text-sm">{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="text-gold w-4 h-4" />
            <span className="text-gold font-bold text-lg">{price}</span>
          </div>
        </div>

        <button className="mt-4 px-6 py-2 bg-[hsl(var(--gold))] text-black font-semibold text-sm uppercase tracking-wide rounded hover:bg-[hsl(var(--light-gold))] transition-colors shadow-button">
          Book Now
        </button>
      </div>
    </div>
  );
}
