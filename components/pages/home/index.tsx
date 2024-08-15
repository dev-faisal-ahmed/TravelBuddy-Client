import { TLoggedUser, TTopRequestTrip, TTrip } from '@/lib/types';
import { Banner } from './Banner';
import { RecentTrips } from './RecentTrips';
import { TopDestinations } from './top-destinations';
import { WishList } from './WishList';
import { Footer } from './Footer';
import { UpcomingTrips } from './UpcomingTrips';
import { TopRequestedTrips } from './TopRequestedTrips';

type TProps = {
  trips: TTrip[];
  user: TLoggedUser | null;
  upcomingTrips: TTrip[];
  topRequestedTrips: TTopRequestTrip[];
};

export const Home = async ({
  trips,
  user,
  upcomingTrips,
  topRequestedTrips,
}: TProps) => {
  return (
    <>
      <section className='bg-primary-100'>
        <Banner />
      </section>
      <RecentTrips trips={trips} />
      <UpcomingTrips trips={upcomingTrips} />
      <TopRequestedTrips trips={topRequestedTrips} />
      <TopDestinations />
      <WishList user={user} />
      <Footer />
    </>
  );
};
