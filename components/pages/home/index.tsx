import { TLoggedUser, TTopRequestTrip, TTrip } from '@/lib/types';
import { Banner } from './Banner';
import { RecentTrips } from './RecentTrips';
import { TopDestinations } from './top-destinations';
import { WishList } from './WishList';
import { Footer } from './Footer';
import { UpcomingTrips } from './UpcomingTrips';
import { TopRequestedTrips } from './TopRequestedTrips';
import {
  getTopRequestedTrips,
  getTrips,
  getUpcomingTrips,
} from '@/app/(main)/(home)/data-fetching';
import { getUser } from '@/lib/actions/getUser';

export const Home = async () => {
  return (
    <>
      <section className='bg-primary-100'>
        <Banner />
      </section>
      <RecentTripsFetcher />
      <UpcomingTripsFetcher />
      <ToRequestedTripFetcher />
      <TopDestinations />
      <UserFetcher />
      <Footer />
    </>
  );
};

const RecentTripsFetcher = async () => {
  const trips = await getTrips();
  console.log(trips);
  return <RecentTrips trips={trips} />;
};

const UpcomingTripsFetcher = async () => {
  const trips = await getUpcomingTrips();
  return <UpcomingTrips trips={trips} />;
};

const UserFetcher = async () => {
  const user = await getUser();
  return <WishList user={user} />;
};

const ToRequestedTripFetcher = async () => {
  const trips = await getTopRequestedTrips();
  return <TopRequestedTrips trips={trips} />;
};
