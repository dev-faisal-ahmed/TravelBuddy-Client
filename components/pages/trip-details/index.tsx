import {
  CalendarCheck as CalendarCheckIcon,
  CalendarMinus2 as CalendarMinus2Icon,
  LayoutList as LayoutListIcon,
  MapPin as MapPinIcon,
} from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';
import { TLoggedUser, TTrip } from '@/lib/types';
import { ImageCarousel } from './ImageCarousel';
import { format } from 'date-fns';
import { Fragment, PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type TProps = {
  trip: TTrip;
  user: TLoggedUser | null;
};

const formateActivities = (activity: string) => {
  return activity.split('*');
};

export const TripDetails = ({ trip, user }: TProps) => {
  return (
    <Container className='py-12'>
      {trip ? (
        <div className='flex flex-col gap-12 rounded-md md:gap-24 md:border md:p-16 lg:flex-row'>
          <div className='h-full w-full'>
            <ImageCarousel images={trip.images} />
          </div>
          <div className='w-full'>
            <h3 className='flex items-center gap-2 text-xl font-semibold tracking-wider'>
              <MapPinIcon />
              {trip.destination}
            </h3>
            <p className='mt-3 flex items-center gap-2 capitalize text-neutral-600'>
              <LayoutListIcon size={18} />
              Trip Type : {trip.tripType.toLocaleLowerCase()}
            </p>
            <div className='mt-5 flex flex-wrap items-center gap-3'>
              <SmallCard>
                <CalendarCheckIcon size={16} />
                Stars : {format(trip.startDate, 'PPP')}
              </SmallCard>
              <SmallCard>
                <CalendarMinus2Icon size={16} />
                Ends : {format(trip.endDate, 'PPP')}
              </SmallCard>
            </div>

            <p className='mt-6 text-justify'>
              <span className='font-semibold'>Description : </span>
              <span className='text-sm'>{trip.description}</span>
            </p>

            <div className='mt-4'>
              <p className='font-semibold'>Activities. </p>
              <ul className='pl-6 text-sm'>
                {formateActivities(trip.itinerary).map((activity) => (
                  <Fragment key={activity}>
                    {activity && <li className='list-disc'>{activity}</li>}
                  </Fragment>
                ))}
              </ul>
            </div>
            {user?._id === trip.user ? (
              <Button className='mt-6'>Update Trip</Button>
            ) : (
              <Link
                className='mt-6 block'
                href={`/add-trip-request/${trip._id}`}
              >
                <Button>Request To Add Trip</Button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <Message message='No Trip Found' />
      )}
    </Container>
  );
};

const SmallCard = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex w-fit items-center gap-2 rounded-sm bg-primary-100 px-5 py-2 text-sm text-primary'>
      {children}
    </div>
  );
};
