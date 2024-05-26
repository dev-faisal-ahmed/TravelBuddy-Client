'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TUserRole } from '@/lib/types';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { revalidateTag } from 'next/cache';

export const changeRoleAction = async (userId: string, role: TUserRole) => {
  const response = await fetch(
    apiUrl.admin.updateUser(userId),
    fetchOption({ method: 'PATCH', body: { role } }),
  );

  const data = response.json();

  if (response?.ok) revalidateTag(tags.adminUsers);

  return data;
};
