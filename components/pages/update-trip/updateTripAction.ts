'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { TTrip } from '@/lib/types';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { revalidateTag } from 'next/cache';
import { tags } from '@/lib/data/tags';

export const updateTripAction = async (
  payload: Partial<TTrip>,
  tripId: string,
) => {
  const response = await fetch(
    apiUrl.updateTrip(tripId),
    fetchOption({ method: 'PATCH', body: payload }),
  );

  const data = await response.json();
  if (data?.ok) revalidateTag(tags.myTrips);

  return data;
};
