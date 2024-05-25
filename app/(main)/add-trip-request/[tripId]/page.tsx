import { AddTripRequest } from '@/components/pages/add-trip-request';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { TLoggedUser, TRequestTripId } from '@/lib/types';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { redirect } from 'next/navigation';
import { getTripDetails } from '@/global-data-fetching/getTripDetails';

type TProps = {
  params: { tripId: string };
};

const getRequestedTrips = async () => {
  const request = new Request(apiUrl.requestedTrip, {
    headers: { Authorization: cookies().get('token')?.value as string },
  });

  const response = await fetch(request, {
    cache: 'no-store',
    next: { tags: [tags.requestedTrips] },
  });

  const requestedTrips = await response.json();
  console.log(requestedTrips);
  return requestedTrips?.data as TRequestTripId[];
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
      trip={tripData}
      user={user}
      requestedTrips={requestedTrips}
    />
  );
}
