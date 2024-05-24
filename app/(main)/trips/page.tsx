import { Trips } from '@/components/pages/trips';
import { apiUrl } from '@/lib/data/apiUrl';
import { TTrip } from '@/lib/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Buddy | Trips',
};

const fetchTrips = async (searchParams: Record<string, any>) => {
  const response = await fetch(apiUrl.trips(searchParams));
  const tripsData = await response.json();
  return tripsData?.data as TTrip[];
};

type TProps = {
  searchParams: Record<string, any>;
};

export default async function TripsPage({ searchParams }: TProps) {
  const trips = await fetchTrips(searchParams);
  return <Trips trips={trips} />;
}
