import { Container } from '@/components/shared/Container';
import { SearchTrips } from './SearchTrips';
import { TTrip } from '@/lib/types';
import { Message } from '@/components/shared/Message';
import { TripCard } from '@/components/shared/trip-card/TripCard';

type TProps = {
  trips: TTrip[];
};

export const Trips = async ({ trips }: TProps) => {
  return (
    <Container className='py-12'>
      <SearchTrips />
      {trips && trips?.length ? (
        <div className='mt-12 grid grid-cols-3 gap-6'>
          {trips.map((trip) => (
            <TripCard key={trip._id} {...trip} />
          ))}
        </div>
      ) : (
        <Message message='No Trips Found' />
      )}
    </Container>
  );
};
