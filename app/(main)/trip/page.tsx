import { AddTrip } from '@/components/pages/add-trip';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Buddy | Add Trip',
};

export default function AddTripPage() {
  return <AddTrip />;
}
