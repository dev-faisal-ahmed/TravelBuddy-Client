import { AdminTrips } from '@/components/pages/admin/trips';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TAdminTrip } from '@/lib/types';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Travel Buddy | Dashboard - Trips ',
};

const getAllTrips = async () => {
  const request = new Request(apiUrl.admin.trips, {
    headers: { Authorization: cookies().get('token')?.value as string },
  });

  const response = await fetch(request, {
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
