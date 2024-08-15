import { Container } from '@/components/shared/Container';
import { TTrip } from '@/lib/types';
import { TripCard } from './TripCard';

type TProps = { trips: TTrip[] };

export const UpcomingTrips = ({ trips }: TProps) => {
  return (
    <Container className='py-6'>
      <h3 className='mb-6 text-xl font-semibold'>Upcoming Trips</h3>
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {trips.map((trip) => (
          <TripCard key={trip._id} {...trip} />
        ))}
      </div>
    </Container>
  );
};
