import { Home } from '@/components/pages/home';
import { apiUrl } from '@/lib/data/apiUrl';
import { TLoggedUser, TTrip } from '@/lib/types';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

const getTrips = async () => {
  const response = await fetch(apiUrl.trips({ page: 1, limit: 9 }), {
    cache: 'no-store',
  });

  const trips = await response.json();
  return trips?.data as TTrip[];
};

export default async function HomePage() {
  const trips = await getTrips();
  const token = cookies().get('token')?.value;

  const user = token ? (jwtDecode(token) as TLoggedUser) : null;

  return <Home trips={trips} user={user} />;
}
