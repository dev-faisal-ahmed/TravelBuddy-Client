import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TAdminTrip } from '@/lib/types';
import { fetchRequestMaker } from '@/lib/utils/fetchRequestMaker';

export const getAllTrips = async () => {
  const response = await fetch(fetchRequestMaker(apiUrl.admin.trips), {
    cache: 'no-store',
    next: { tags: [tags.adminTrips] },
  });

  const trips = await response.json();

  return trips?.data as TAdminTrip[];
};
