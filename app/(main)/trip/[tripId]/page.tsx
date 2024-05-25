import { TripDetails } from '@/components/pages/trip-details';
import { getTripDetails } from '@/global-data-fetching/getTripDetails';
import { TLoggedUser } from '@/lib/types';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

type TProps = {
  params: { tripId: string };
};

export default async function TripDetailsPage({ params }: TProps) {
  const tripData = await getTripDetails(params.tripId);
  const token = cookies().get('token')?.value;

  const user = token ? (jwtDecode(token) as TLoggedUser) : null;

  return <TripDetails trip={tripData} user={user} />;
}
