import { cookies } from 'next/headers';

type TFetchOption = {
  method: 'POST' | 'PATCH';
  body?: any;
};

export const fetchOption = ({ method, body }: TFetchOption) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: cookies().get('token')?.value as string,
    },
    body: JSON.stringify(body),
  };
};
