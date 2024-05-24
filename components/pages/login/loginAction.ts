'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { fetchOption } from '@/lib/utils/fetchOptions';
import { TLoginFormFields } from './useLogin';
import { cookies } from 'next/headers';

export const loginAction = async (payload: TLoginFormFields) => {
  const response = await fetch(
    apiUrl.login,
    fetchOption({
      method: 'POST',
      body: {
        email: payload.email.trim(),
        password: payload.password,
      },
    }),
  );

  const data = await response.json();

  if (data?.ok) {
    cookies().set('token', data?.data?.token);
  }

  return data;
};
