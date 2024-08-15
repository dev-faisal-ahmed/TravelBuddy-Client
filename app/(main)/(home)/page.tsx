import {
  getTopRequestedTrips,
  getUpcomingTrips,
  getTrips,
} from './data-fetching';
import { Home } from '@/components/pages/home';
import { getUser } from '@/lib/actions/getUser';

export default async function HomePage() {
  const trips = await getTrips();
  const user = await getUser();
  const topRequestedTrips = await getTopRequestedTrips();
  const upcomingTrips = await getUpcomingTrips();

  return (
    <Home
      trips={trips}
      user={user}
      topRequestedTrips={topRequestedTrips}
      upcomingTrips={upcomingTrips}
    />
  );
}
