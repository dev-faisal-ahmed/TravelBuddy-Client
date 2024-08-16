'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { fetchOption } from '@/lib/utils/fetchOptions';

export const deleteReviewAction = async (reviewId: string) => {
  const response = await fetch(
    apiUrl.deleteReview(reviewId),
    fetchOption({ method: 'DELETE' }),
  );

  const responseData = await response.json();
  return responseData;
};
