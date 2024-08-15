import { Container } from '@/components/shared/Container';
import { TTopRequestTrip } from '@/lib/types';
import { TripCard } from './TripCard';

type TProps = { trips: TTopRequestTrip[] };

export const TopRequestedTrips = ({ trips }: TProps) => {
  return (
    <Container className='pb-6 pt-12'>
      <h3 className='mb-6 text-xl font-semibold'>Top Request Trips</h3>
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {trips.map((trip) => (
          <TripCard key={trip._id} {...trip} />
        ))}
      </div>
    </Container>
  );
};
