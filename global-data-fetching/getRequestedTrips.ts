import { TRequestedTrip } from '@/lib/types';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { cookies } from 'next/headers';

export const getRequestedTrips = async () => {
  const request = new Request(apiUrl.requestedTrip, {
    headers: { Authorization: cookies().get('token')?.value as string },
  });

  const response = await fetch(request, {
    cache: 'no-store',
    next: { tags: [tags.requestedTrips] },
  });

  const requestedTrips = await response.json();
  return requestedTrips?.data as TRequestedTrip[];
};
