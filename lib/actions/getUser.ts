import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { TLoggedUser } from '../types';

export const getUser = async () => {
  const token = cookies().get('token')?.value;
  if (!token) return null;

  const user = jwtDecode(token);
  if (!user) return null;

  return user as TLoggedUser;
};
