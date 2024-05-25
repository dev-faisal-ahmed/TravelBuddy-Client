import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';
import { TRequestedTrip } from '@/lib/types';
import { RequestedTripCard } from './RequestedTripCard';

type TProps = {
  requestedTrips: TRequestedTrip[];
};

export const ProfileRequestedTrips = ({ requestedTrips }: TProps) => {
  return (
    <Container className='py-12'>
      {requestedTrips && requestedTrips.length ? (
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {requestedTrips.map((trip) => (
            <RequestedTripCard key={trip._id} {...trip} />
          ))}
        </div>
      ) : (
        <Message message='You have not requested for any trip' />
      )}
    </Container>
  );
};
