'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { TChangePasswordFields } from './useChangePassword';
import { fetchOption } from '@/lib/utils/fetchOptions';

export const changePasswordAction = async (
  payload: Omit<TChangePasswordFields, 'confirmPassword'>,
) => {
  const response = await fetch(
    apiUrl.changePassword,
    fetchOption({ method: 'PATCH', body: payload }),
  );

  const data = await response.json();
  return data;
};
