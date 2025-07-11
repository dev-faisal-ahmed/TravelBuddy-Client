import { Container } from '@/components/shared/Container';
import { TTrip } from '@/lib/types';
import { TripCard } from './TripCard';
import Link from 'next/link';
import { Message } from '@/components/shared/Message';

type TProps = { trips: TTrip[] };

export const RecentTrips = ({ trips }: TProps) => {
  return (
    <Container className='py-12'>
      <div className='mb-6 flex items-center justify-between'>
        <h3 className='text-xl font-semibold'>Recent Trips</h3>
        <Link href={'/trips'} className='text-primary'>
          See More
        </Link>
      </div>

      {trips.length ? (
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {trips.map((trip) => (
            <TripCard key={trip._id} {...trip} />
          ))}
        </div>
      ) : (
        <Message message='No Trip found' />
      )}
    </Container>
  );
};
