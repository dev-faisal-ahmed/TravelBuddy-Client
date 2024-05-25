'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { TAddTripFormFields } from './useAddTrip';
import { revalidateTag } from 'next/cache';
import { tags } from '@/lib/data/tags';

type TAddTripPayload = TAddTripFormFields & {
  startDate: Date;
  endDate: Date;
  tripType: string;
  images: string[];
};

export const addTripAction = async (payload: TAddTripPayload) => {
  const response = await fetch(
    apiUrl.addTrip,
    fetchOption({ method: 'POST', body: payload }),
  );

  const data = await response.json();
  if (data.ok) revalidateTag(tags.TRIPS);
  return data;
};
