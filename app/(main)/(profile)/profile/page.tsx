import { MyTrips } from '@/components/pages/profile/my-trips';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TTrip } from '@/lib/types';
import { fetchRequestMaker } from '@/lib/utils/fetchRequestMaker';

const getMyTrips = async () => {
  const response = await fetch(fetchRequestMaker(apiUrl.myTrips), {
    cache: 'no-store',
    next: { tags: [tags.myTrips] },
  });

  const requestedTrips = await response.json();
  return requestedTrips?.data as TTrip[];
};

export default async function MyTripsPage() {
  const myTrips = await getMyTrips();
  return <MyTrips myTrips={myTrips} />;
}
