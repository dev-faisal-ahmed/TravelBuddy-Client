import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';
import { TTrip } from '@/lib/types';
import { MyTripCard } from './MyTripCard';

type TProps = {
  myTrips: TTrip[];
};

export const MyTrips = ({ myTrips }: TProps) => {
  return (
    <Container className='py-6'>
      {myTrips && myTrips.length ? (
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {myTrips.map((trip) => (
            <MyTripCard key={trip._id} {...trip} />
          ))}
        </div>
      ) : (
        <Message message='You have not created any trip' />
      )}
    </Container>
  );
};
