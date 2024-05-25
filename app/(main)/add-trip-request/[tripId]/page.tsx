import { AddTripRequest } from '@/components/pages/add-trip-request';
import { getTripDetails } from '../../trip/[tripId]/page';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { TLoggedUser, TRequestTripId } from '@/lib/types';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';

type TProps = {
  params: { tripId: string };
};

const getRequestedTrips = async () => {
  const request = new Request(apiUrl.requestedTrip, {
    headers: { Authorization: cookies().get('token')?.value as string },
  });

  const response = await fetch(request, {
    cache: 'no-store',
    next: { tags: [tags.REQUESTED_TRIPS] },
  });

  const requestedTrips = await response.json();
  console.log(requestedTrips);
  return requestedTrips?.data as TRequestTripId[];
};

export default async function AddTripRequestPage({ params }: TProps) {
  const tripData = await getTripDetails(params.tripId);
  const token = cookies().get('token')?.value;
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
