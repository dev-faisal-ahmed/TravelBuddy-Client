import { AdminTrips } from '@/components/pages/admin/trips';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TAdminTrip } from '@/lib/types';
import { fetchRequestMaker } from '@/lib/utils/fetchRequestMaker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Buddy | Dashboard - Trips ',
};

const getAllTrips = async () => {
  const response = await fetch(fetchRequestMaker(apiUrl.admin.trips), {
    cache: 'no-store',
    next: { tags: [tags.adminTrips] },
  });

  const trips = await response.json();

  return trips?.data as TAdminTrip[];
};

export default async function AdminTripsPage() {
  const trips = await getAllTrips();
  return <AdminTrips trips={trips} />;
}
