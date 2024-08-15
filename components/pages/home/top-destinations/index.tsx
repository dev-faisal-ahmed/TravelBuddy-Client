import { Container } from '@/components/shared/Container';
import { DestinationCard } from './DestinationCard';
import { topDestinations } from '@/lib/data/topDestinations';

export const TopDestinations = () => {
  return (
    <Container className='py-12'>
      <h3 className='text-xl font-semibold'>Top Notch Destinations</h3>
      <div className='mt-6 grid gap-6 md:grid-cols-3'>
        <DestinationCard {...topDestinations[0]} />
        <div className='flex flex-col gap-6'>
          <DestinationCard {...topDestinations[1]} />
          <DestinationCard {...topDestinations[2]} />
        </div>
        <DestinationCard {...topDestinations[3]} />
      </div>
    </Container>
  );
};
