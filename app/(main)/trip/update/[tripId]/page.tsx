import { UpdateTrip } from '@/components/pages/update-trip';
import { getTripDetails } from '@/global-data-fetching/getTripDetails';
import { TLoggedUser } from '@/lib/types';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type TProps = {
  params: { tripId: string };
};

export default async function UpdateTripPage({ params }: TProps) {
  const tripDetails = await getTripDetails(params.tripId);
  const token = cookies().get('token')?.value;
  if (!token) redirect('/login');

  const user = jwtDecode(token) as TLoggedUser;

  return <UpdateTrip trip={tripDetails} user={user} />;
}
