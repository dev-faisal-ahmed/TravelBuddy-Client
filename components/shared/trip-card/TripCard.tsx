'use client';

import {
  CalendarCheck as CalendarCheckIcon,
  CalendarMinus2 as CalendarMinus2Icon,
  LayoutList as LayoutListIcon,
  MapPin as MapPinIcon,
} from 'lucide-react';

import { TTrip } from '@/lib/types';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
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
    <div className='relative min-h-[400px] overflow-hidden rounded-md'>
      {/* Background Image */}
      <Image
        src={images?.[0] || '/fallback.jpg'}
        alt={destination}
        fill
        className='-z-10 object-cover'
        priority
      />

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/10 to-black/30' />

      {/* Content */}
      <div className='relative flex h-full flex-col justify-end p-6'>
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
    </div>
  );
};
