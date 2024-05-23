'use server';

import { apiUrl } from '@/lib/data/apiUrl';
import { TRegisterFormFields } from './useRegister';
import { fetchOption } from '@/lib/utils/fetchOptions';

export const registerAction = async (payload: TRegisterFormFields) => {
  const response = await fetch(
    apiUrl.register,
    fetchOption({
      method: 'POST',
      body: {
        name: payload.name.trim(),
        email: payload.email.trim(),
        password: payload.password,
      },
    }),
  );

  const data = await response.json();
  return data;
};
