import { TLoggedUser, TTrip } from '@/lib/types';
import { Banner } from './Banner';
import { RecentTrips } from './recent-trips';
import { TopDestinations } from './top-destinations';
import { WishList } from './WishList';
import { Footer } from './Footer';

type TProps = {
  trips: TTrip[];
  user: TLoggedUser | null;
};

export const Home = async ({ trips, user }: TProps) => {
  return (
    <>
      <section className='bg-primary-100'>
        <Banner />
      </section>
      <RecentTrips trips={trips} />
      <TopDestinations />
      <WishList user={user} />
      <Footer />
    </>
  );
};
