import { TripDetails } from '@/components/pages/trip-details';
import { apiUrl } from '@/lib/data/apiUrl';
import { TLoggedUser, TTrip } from '@/lib/types';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

type TProps = {
  params: { tripId: string };
};

export const getTripDetails = async (tripId: string) => {
  const response = await fetch(apiUrl.tripDetails(tripId), {
    cache: 'no-store',
  });

  const tripData = await response.json();
  return tripData?.data as TTrip;
};

export default async function TripDetailsPage({ params }: TProps) {
  // disable caching
  const tripData = await getTripDetails(params.tripId);
  const token = cookies().get('token')?.value;

  const user = jwtDecode(token!) as TLoggedUser;

  return <TripDetails trip={tripData} user={user} />;
}
