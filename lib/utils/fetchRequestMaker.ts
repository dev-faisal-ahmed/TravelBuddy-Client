import { cookies } from 'next/headers';

export const fetchRequestMaker = (url: string) => {
  const request = new Request(url, {
    headers: { Authorization: cookies().get('token')?.value as string },
  });

  return request;
};
