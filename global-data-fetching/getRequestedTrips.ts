import { TRequestedTrip } from '@/lib/types';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { fetchRequestMaker } from '@/lib/utils/fetchRequestMaker';

export const getRequestedTrips = async () => {
  const response = await fetch(fetchRequestMaker(apiUrl.requestedTrip), {
    cache: 'no-store',
    next: { tags: [tags.requestedTrips] },
  });

  const requestedTrips = await response.json();
  console.log(requestedTrips);
  return requestedTrips?.data as TRequestedTrip[];
};
