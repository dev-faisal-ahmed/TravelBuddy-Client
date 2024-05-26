'use client';

import {
  CalendarCheckIcon,
  CalendarMinus2Icon,
  MapPinIcon,
} from 'lucide-react';
import { TJoinRequest } from '@/lib/types';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { useResponseRequest } from './useResponseRequest';

export const JoinRequestCard = ({ _id, user, trip }: TJoinRequest) => {
  const { isLoading, onResponse } = useResponseRequest();

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${trip.images?.[0]})`,
        minHeight: 400,
      }}
      className='flex flex-col justify-end rounded-md bg-cover bg-center p-6'
    >
      <div className='relative rounded-sm bg-white p-5'>
        <div
          style={{ transform: 'translateX(-50%)' }}
          className='absolute -top-12 left-1/2'
        >
          <div className='flex size-24 items-center justify-center rounded-full border-4 border-white bg-primary text-4xl font-semibold text-white shadow-md'>
            {user.name[0]}
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-center text-lg font-semibold'>{user.name}</h2>
        </div>

        <div className='mt-6 flex flex-wrap items-center justify-between gap-3'>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarCheckIcon size={16} />
            {format(trip.startDate, 'PPP')}
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-500'>
            <CalendarMinus2Icon size={16} />
            {format(trip.endDate, 'PPP')}
          </div>
        </div>
        <h2 className='mt-2 flex items-center gap-2 text-xs text-neutral-500'>
          <MapPinIcon size={16} /> {trip.destination}
        </h2>
        <div className='mt-6 flex items-center gap-3'>
          <Button
            onClick={() => onResponse(_id, true)}
            disabled={isLoading}
            className='w-full'
          >
            Accept
          </Button>

          <Button
            onClick={() => onResponse(_id, false)}
            disabled={isLoading}
            className='w-full'
            variant={'destructive'}
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};
