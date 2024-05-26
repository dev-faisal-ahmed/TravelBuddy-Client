'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TUserStatus } from '@/lib/types';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { revalidateTag } from 'next/cache';

export const changeStatus = async (userId: string, status: TUserStatus) => {
  const response = await fetch(
    apiUrl.admin.updateUser(userId),
    fetchOption({ method: 'PATCH', body: { status } }),
  );

  const data = response.json();

  if (response?.ok) revalidateTag(tags.adminUsers);

  return data;
};
