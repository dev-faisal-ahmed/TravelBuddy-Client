import {
  Ban as BanIcon,
  CalendarCheck as CalendarCheckIcon,
  CalendarMinus2 as CalendarMinus2Icon,
  MapPin as MapPinIcon,
  SquareCheckBig as SquareCheckBigIcon,
} from 'lucide-react';

import { TRequestedTrip } from '@/lib/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export const RequestedTripCard = ({ trip, status }: TRequestedTrip) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${trip.images?.[0]})`,
        minHeight: 400,
      }}
      className='relative flex flex-col justify-end rounded-md bg-cover bg-center p-6'
    >
      <div className='rounded-sm bg-white p-5'>
        <h2 className='flex items-center gap-2 text-sm font-semibold'>
          <MapPinIcon size={18} /> {trip.destination}
        </h2>

        <div className='mt-3 flex flex-wrap items-center justify-between gap-3'>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarCheckIcon size={16} />
            {format(trip.startDate, 'PPP')}
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarMinus2Icon size={16} />
            {format(trip.endDate, 'PPP')}
          </div>
        </div>

        <Link className='mt-6 block' href={`/trip/${trip._id}`}>
          <Button className='w-full'>View Details</Button>
        </Link>
      </div>

      <div
        className={cn(
          'absolute right-6 top-6 flex items-center gap-2 rounded-sm px-3 py-1 text-sm text-white',
          status === 'ACCEPTED' ? 'bg-primary' : 'bg-orange-500',
        )}
      >
        {status === 'ACCEPTED' ? (
          <SquareCheckBigIcon size={18} />
        ) : (
          <BanIcon size={18} />
        )}
        {status}
      </div>
    </div>
  );
};
