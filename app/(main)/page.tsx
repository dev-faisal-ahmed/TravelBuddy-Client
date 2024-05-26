import { Home } from '@/components/pages/home';
import { apiUrl } from '@/lib/data/apiUrl';
import { TTrip } from '@/lib/types';

const getTrips = async () => {
  const response = await fetch(apiUrl.trips({ page: 1, limit: 9 }), {
    cache: 'no-store',
  });

  const trips = await response.json();
  return trips?.data as TTrip[];
};

export default async function HomePage() {
  const trips = await getTrips();
  return <Home trips={trips} />;
}
