import {
  CalendarCheck as CalendarCheckIcon,
  CalendarMinus2 as CalendarMinus2Icon,
  LayoutList as LayoutListIcon,
  MapPin as MapPinIcon,
} from 'lucide-react';
import { TTrip } from '@/lib/types';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const TripCard = ({
  _id,
  images,
  destination,
  tripType,
  startDate,
  endDate,
}: TTrip) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${images?.[0]})`,
        minHeight: 400,
      }}
      className='flex flex-col justify-end rounded-md bg-cover bg-center p-6'
    >
      <div className='rounded-sm bg-white p-5'>
        <h2 className='flex items-center gap-2 text-sm font-semibold'>
          <MapPinIcon size={18} /> {destination}
        </h2>
        <p className='mt-2 flex items-center gap-2 text-sm text-neutral-500'>
          <LayoutListIcon size={18} />
          <span>
            {tripType[0]}
            <span className='lowercase'>{tripType.slice(1)}</span>
          </span>
        </p>
        <div className='mt-3 flex flex-wrap items-center justify-between gap-3'>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarCheckIcon size={16} />
            {format(startDate, 'PPP')}
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarMinus2Icon size={16} />
            {format(endDate, 'PPP')}
          </div>
        </div>
        <Link className='mt-6 block' href={`/trip/${_id}`}>
          <Button className='w-full'>View Details</Button>
        </Link>
      </div>
    </div>
  );
};
