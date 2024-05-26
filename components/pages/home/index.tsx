import { TTrip } from '@/lib/types';
import { Banner } from './Banner';
import { RecentTrips } from './recent-trips';

type TProps = {
  trips: TTrip[];
};

export const Home = async ({ trips }: TProps) => {
  return (
    <>
      <section className='bg-primary-100'>
        <Banner />
      </section>
      <RecentTrips trips={trips} />
    </>
  );
};
