import { apiUrl } from '@/lib/data/apiUrl';
import { TTopRequestTrip, TTrip } from '@/lib/types';

export const getTrips = async () => {
  const response = await fetch(apiUrl.trips({ page: 1, limit: 9 }), {
    next: { revalidate: 600000 },
  });

  const trips = await response.json();
  return trips?.data as TTrip[];
};

export const getTopRequestedTrips = async () => {
  const response = await fetch(apiUrl.topRequestedTrips, {
    next: { revalidate: 600000 },
  });

  const trips = await response.json();
  return trips?.data as TTopRequestTrip[];
};

export const getUpcomingTrips = async () => {
  const response = await fetch(apiUrl.upcomingTrips, {
    next: { revalidate: 600000 },
  });

  const trips = await response.json();
  return trips?.data as TTrip[];
};
