'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { TAddTripFormFields } from './useAddTrip';
import { revalidatePath } from 'next/cache';

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
  if (data.ok) revalidatePath('/trips');
  return data;
};
