import { ProfileRequestedTrips } from '@/components/pages/profile/requested-trips';
import { getRequestedTrips } from '@/global-data-fetching/getRequestedTrips';

export default async function RequestedTrip() {
  const requestedTrips = await getRequestedTrips();
  return <ProfileRequestedTrips requestedTrips={requestedTrips} />;
}
