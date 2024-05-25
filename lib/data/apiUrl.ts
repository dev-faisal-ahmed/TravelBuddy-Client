import { API_KEY } from '../config';
import { makeUrl } from '../utils/searchParamsHelper';

// export const SERVER_ADDRESS = 'http://localhost:5000/api/v1';
export const SERVER_ADDRESS =
  'https://travel-buddy-server-pearl.vercel.app/api/v1';

export const apiUrl = {
  imageBBUrl: `https://api.imgbb.com/1/upload?key=${API_KEY}`,
  register: `${SERVER_ADDRESS}/auth/register`,
  login: `${SERVER_ADDRESS}/auth/login`,
  addTrip: `${SERVER_ADDRESS}/trip`,
  tripDetails: (tripId: string) => `${SERVER_ADDRESS}/trip/${tripId}`,
  trips: (searchParams: Record<string, any>) =>
    `${SERVER_ADDRESS}/${makeUrl('/trips', searchParams)}`,
};
