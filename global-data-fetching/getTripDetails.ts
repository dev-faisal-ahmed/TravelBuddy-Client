import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TTrip } from '@/lib/types';

export const getTripDetails = async (tripId: string) => {
  const response = await fetch(apiUrl.tripDetails(tripId), {
    cache: 'no-store',
    next: { tags: [tags.tripDetails] },
  });

  const tripData = await response.json();
  return tripData?.data as TTrip;
};
