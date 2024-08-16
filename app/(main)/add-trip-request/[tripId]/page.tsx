import { AddTripRequest } from '@/components/pages/add-trip-request';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { TLoggedUser } from '@/lib/types';
import { redirect } from 'next/navigation';
import { getTripDetails } from '@/global-data-fetching/getTripDetails';
import { getRequestedTrips } from '@/global-data-fetching/getRequestedTrips';

type TProps = {
  params: { tripId: string };
};

export default async function AddTripRequestPage({ params }: TProps) {
  const tripData = await getTripDetails(params.tripId);
  const token = cookies().get('token')?.value;

  // if user not logged in redirect the user to the login page
  if (!token) redirect('/login');

  const user = jwtDecode(token!) as TLoggedUser;
  const requestedTrips = await getRequestedTrips();

  return (
    <AddTripRequest
      trip={tripData.trip}
      user={user}
      requestedTrips={requestedTrips}
    />
  );
}
