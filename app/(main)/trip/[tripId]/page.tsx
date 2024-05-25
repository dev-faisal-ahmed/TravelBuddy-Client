import { TripDetails } from '@/components/pages/trip-details';
import { apiUrl } from '@/lib/data/apiUrl';
import { TTrip } from '@/lib/types';

type TProps = {
  params: { tripId: string };
};

const getTripDetails = async (tripId: string) => {
  const response = await fetch(apiUrl.tripDetails(tripId));
  const tripData = await response.json();
  return tripData?.data as TTrip;
};

export default async function TripDetailsPage({ params }: TProps) {
  const tripData = await getTripDetails(params.tripId);

  return <TripDetails trip={tripData} />;
}
