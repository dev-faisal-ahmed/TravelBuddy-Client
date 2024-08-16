import { AdminTrips } from '@/components/pages/admin/trips';
import { getAllTrips } from '@/global-data-fetching/getAllTrips';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Buddy | Dashboard - Trips ',
};

export default async function AdminTripsPage() {
  const trips = await getAllTrips();
  return <AdminTrips trips={trips} />;
}
