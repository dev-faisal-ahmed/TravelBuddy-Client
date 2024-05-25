'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { TAddTripFromFields } from './useAddTripRequest';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { revalidateTag } from 'next/cache';
import { tags } from '@/lib/data/tags';

type TPayload = TAddTripFromFields & {
  trip: string;
};

export const addTripRequestAction = async ({
  phone,
  trip,
  address,
}: TPayload) => {
  const response = await fetch(
    apiUrl.addTripRequest,
    fetchOption({ method: 'POST', body: { trip, phone, address } }),
  );

  const responseData = await response.json();
  if (responseData?.ok) revalidateTag(tags.REQUESTED_TRIPS);

  return responseData;
};
