import { CalendarCheckIcon } from 'lucide-react';
import { CalendarMinus2Icon } from 'lucide-react';
import { MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FiUsers } from 'react-icons/fi';
import { TTrip } from '@/lib/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export const TripCard = ({
  _id,
  images,
  destination,
  description,
  startDate,
  endDate,
  tripRequests,
}: TTrip & { tripRequests?: any[] }) => {
  return (
    <div className='rounded-md border border-neutral-300 bg-white p-4'>
      <Image
        className='w-full rounded-sm object-cover object-center'
        style={{ height: 250 }}
        src={images[0]}
        width={400}
        height={400}
        alt='Trip Image'
      />
      <div className='mt-5'>
        <h2 className='flex items-center gap-2 text-sm font-semibold'>
          <MapPinIcon size={18} /> {destination}
        </h2>
        <p className='mt-2 line-clamp-3 text-sm text-neutral-500'>
          {description}
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
        {tripRequests && (
          <div className='mt-3 flex items-center gap-2 text-xs text-neutral-500'>
            <FiUsers size={16} />
            {tripRequests.length} {tripRequests.length > 1 ? 'Users' : 'User'}
          </div>
        )}

        <Link className='mt-6 block' href={`/trip/${_id}`}>
          <Button className='w-full'>View Details</Button>
        </Link>
      </div>
    </div>
  );
};
