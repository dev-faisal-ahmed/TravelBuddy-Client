import { cookies } from 'next/headers';

type TFetchOption = {
  method: 'POST' | 'PATCH' | 'GET';
  body?: any;
};

export const fetchOption = ({ method, body }: TFetchOption) => {
  if (method === 'GET')
    return {
      method,
      headers: {
        Authorization: cookies().get('token')?.value as string,
        'Content-Type': 'application/json',
      },
    };

  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: cookies().get('token')?.value as string,
    },
    body: JSON.stringify(body),
  };
};
