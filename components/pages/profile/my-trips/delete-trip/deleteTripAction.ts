'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { revalidateTag } from 'next/cache';

export const deleteTripAction = async (tripId: string) => {
  const response = await fetch(
    apiUrl.deleteTrip(tripId),
    fetchOption({ method: 'DELETE' }),
  );

  const data = await response.json();
  if (data?.ok) {
    revalidateTag(tags.myTrips);
  }

  return data;
};
