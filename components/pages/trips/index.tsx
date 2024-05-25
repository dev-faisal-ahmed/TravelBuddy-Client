import { Container } from '@/components/shared/Container';
import { SearchTrips } from './SearchTrips';
import { TMeta, TTrip } from '@/lib/types';
import { Message } from '@/components/shared/Message';
import { TripCard } from '@/components/shared/trip-card/TripCard';
import { ClearFilter } from './ClearFilter';
import { Pagination } from './Pagination';

type TProps = {
  trips: TTrip[];
  meta: TMeta;
  searchParams: Record<string, any>;
};

export const Trips = async ({ trips, meta, searchParams }: TProps) => {
  return (
    <Container className='py-12'>
      <div className='mx-auto flex max-w-[720px] cursor-pointer gap-3'>
        <SearchTrips />
        <ClearFilter />
      </div>
      {trips && trips?.length ? (
        <>
          <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {trips.map((trip) => (
              <TripCard key={trip._id} {...trip} />
            ))}
          </div>
          <Pagination meta={meta} searchParams={searchParams} />
        </>
      ) : (
        <Message message='No Trips Found' />
      )}
    </Container>
  );
};
