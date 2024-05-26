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
  addTripRequest: `${SERVER_ADDRESS}/trip-request`,
  requestedTrip: `${SERVER_ADDRESS}/trip-request/requested`,
  myTrips: `${SERVER_ADDRESS}/trips/mine`,

  tripDetails: (tripId: string) => `${SERVER_ADDRESS}/trip/${tripId}`,
  deleteTrip: (tripId: string) => `${SERVER_ADDRESS}/trip/${tripId}`,
  updateTrip: (tripId: string) => `${SERVER_ADDRESS}/trip/${tripId}`,
  trips: (searchParams: Record<string, any>) =>
    `${SERVER_ADDRESS}/${makeUrl('/trips', searchParams)}`,
  editProfile: `${SERVER_ADDRESS}/profile`,
  changePassword: `${SERVER_ADDRESS}/profile/change-password`,

  admin: {
    trips: `${SERVER_ADDRESS}/admin/trips`,
    users: `${SERVER_ADDRESS}/admin/users`,
    deleteTrip: (tripId: string) => `${SERVER_ADDRESS}/admin/trip/${tripId}`,
  },
};
