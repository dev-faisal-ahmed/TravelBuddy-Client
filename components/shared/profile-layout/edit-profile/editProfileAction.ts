'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { TEditProfileFields } from './useEditProfile';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { cookies } from 'next/headers';

export const editProfileAction = async (payload: TEditProfileFields) => {
  const response = await fetch(
    apiUrl.editProfile,
    fetchOption({ method: 'PATCH', body: payload }),
  );

  const updatedUser = await response.json();
  if (updatedUser?.ok) cookies().set('token', updatedUser?.data?.token);

  return updatedUser;
};
