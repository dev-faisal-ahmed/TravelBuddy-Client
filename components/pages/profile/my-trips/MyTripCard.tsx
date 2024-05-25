import {
  CalendarCheck as CalendarCheckIcon,
  CalendarMinus2 as CalendarMinus2Icon,
  MapPin as MapPinIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TTrip } from '@/lib/types';
import { format } from 'date-fns';
import Link from 'next/link';
import { DeleteTrip } from './delete-trip';

export const MyTripCard = ({
  _id,
  images,
  destination,
  startDate,
  endDate,
  description,
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

        <div className='mt-3 flex flex-wrap items-center justify-between gap-3'>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarCheckIcon size={16} />
            {format(startDate, 'PPP')}
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarMinus2Icon size={16} />
            {format(endDate, 'PPP')}
          </div>
          <p className='mt-2 line-clamp-3 text-justify text-sm text-neutral-700'>
            {description}
          </p>
        </div>
        <div className='mt-6 flex items-center gap-5'>
          <DeleteTrip tripId={_id} />
          <Button variant={'outline'} className='w-full'>
            Update
          </Button>
        </div>
        <Link className='mt-3 block' href={`/trip/${_id}`}>
          <Button className='w-full'>View Details</Button>
        </Link>
      </div>
    </div>
  );
};
