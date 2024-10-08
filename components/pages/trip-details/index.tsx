import {
  CalendarCheck as CalendarCheckIcon,
  CalendarMinus2 as CalendarMinus2Icon,
  LayoutList as LayoutListIcon,
  MapPin as MapPinIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';
import { TLoggedUser, TTripDetails } from '@/lib/types';
import { ImageCarousel } from './ImageCarousel';
import { format } from 'date-fns';
import { Fragment, PropsWithChildren, use } from 'react';
import { Button } from '@/components/ui/button';
import { AddReview } from './add-review';
import { Reviews } from './reviews';

type TProps = {
  tripDetails: TTripDetails;
  user: TLoggedUser | null;
};

const formateActivities = (activity: string) => {
  return activity.split('*');
};

export const TripDetails = ({ tripDetails, user }: TProps) => {
  if (!tripDetails || !Object.keys(tripDetails).length)
    return <Message message='No Trip Found' />;

  const { reviews, trip } = tripDetails;
  const {
    _id,
    images,
    description,
    destination,
    tripType,
    startDate,
    endDate,
    itinerary,
  } = trip;

  return (
    <Container className='py-12'>
      <div className='flex flex-col gap-12 rounded-md md:gap-24 md:p-16 lg:flex-row'>
        <div className='w-full'>
          <h3 className='flex items-center gap-2 text-xl font-semibold tracking-wider'>
            <MapPinIcon />
            {destination}
          </h3>
          <p className='mt-3 flex items-center gap-2 capitalize text-neutral-600'>
            <LayoutListIcon size={18} />
            Trip Type : {tripType.toLocaleLowerCase()}
          </p>
          <div className='mt-5 flex flex-wrap items-center gap-3'>
            <SmallCard>
              <CalendarCheckIcon size={16} />
              Stars : {format(startDate, 'PPP')}
            </SmallCard>
            <SmallCard>
              <CalendarMinus2Icon size={16} />
              Ends : {format(endDate, 'PPP')}
            </SmallCard>
          </div>

          <p className='mt-6 text-justify'>
            <span className='font-semibold'>Description : </span>
            <span className='text-sm'>{description}</span>
          </p>

          <div className='mt-4'>
            <p className='font-semibold'>Activities. </p>
            <ul className='pl-6 text-sm'>
              {formateActivities(itinerary).map((activity) => (
                <Fragment key={activity}>
                  {activity && <li className='list-disc'>{activity.trim()}</li>}
                </Fragment>
              ))}
            </ul>
          </div>
          {user?._id === trip.user._id ? (
            <Link href={`/trip/update/${_id}`}>
              <Button className='mt-6'>Update Trip</Button>
            </Link>
          ) : (
            <Link className='mt-6 block' href={`/add-trip-request/${_id}`}>
              <Button>Request To Add Trip</Button>
            </Link>
          )}
          <Reviews user={user} reviews={reviews} />
        </div>
        <div className='h-full w-full'>
          <ImageCarousel images={images} />
          <AddReview tripId={_id} user={user} creatorId={trip.user._id} />
        </div>
      </div>
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
