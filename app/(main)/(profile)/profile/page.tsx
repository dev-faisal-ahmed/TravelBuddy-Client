import { MyTrips } from '@/components/pages/profile/my-trips';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TTrip } from '@/lib/types';
import { cookies } from 'next/headers';

const getMyTrips = async () => {
  const request = new Request(apiUrl.myTrips, {
    headers: { Authorization: cookies().get('token')?.value as string },
    next: { tags: [tags.myTrips] },
    cache: 'no-store',
  });

  const response = await fetch(request, {
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
