import { Dashboard } from '@/components/pages/dashboard';
import { getAllTrips } from '@/global-data-fetching/getAllTrips';

export default async function DashboardPage() {
  const trips = await getAllTrips();
  return <Dashboard trips={trips} />;
}
