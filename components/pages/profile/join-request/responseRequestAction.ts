'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { revalidateTag } from 'next/cache';

type TPayload = {
  _id: string;
  isAccepted: boolean;
};

export const responseRequest = async ({ _id, isAccepted }: TPayload) => {
  const response = await fetch(
    apiUrl.responseRequest,
    fetchOption({ method: 'PATCH', body: { _id, isAccepted } }),
  );

  const data = await response.json();
  if (data?.ok) revalidateTag(tags.joinRequests);

  return data;
};
