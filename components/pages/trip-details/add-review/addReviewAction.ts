'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { fetchOption } from '@/lib/utils/fetchOptions';

type TAddReviewPayload = {
  rating: number;
  details: string;
  trip: string;
};

export const addReviewAction = async (payload: TAddReviewPayload) => {
  const response = await fetch(
    apiUrl.addReview,
    fetchOption({ method: 'POST', body: payload }),
  );

  const responseData = await response.json();
  return responseData;
};
