import { API_KEY } from '../config';
import { makeUrl } from '../utils/searchParamsHelper';

// export const SERVER_ADDRESS = 'http://localhost:5000/api/v1';
export const SERVER_ADDRESS =
  'https://travel-buddy-server-pearl.vercel.app/api/v1';

export const apiUrl = {
  // image uploading
  imageBBUrl: `https://api.imgbb.com/1/upload?key=${API_KEY}`,

  // auth
  register: `${SERVER_ADDRESS}/auth/register`,
  login: `${SERVER_ADDRESS}/auth/login`,

  // trips
  addTrip: `${SERVER_ADDRESS}/trip`,
  myTrips: `${SERVER_ADDRESS}/trips/mine`,
  trips: (searchParams: Record<string, any>) =>
    `${SERVER_ADDRESS}/${makeUrl('/trips', searchParams)}`,
  topRequestedTrips: `${SERVER_ADDRESS}/trips/top`,
  upcomingTrips: `${SERVER_ADDRESS}/trips/upcoming`,
  tripDetails: (tripId: string) => `${SERVER_ADDRESS}/trip/${tripId}`,
  deleteTrip: (tripId: string) => `${SERVER_ADDRESS}/trip/${tripId}`,
  updateTrip: (tripId: string) => `${SERVER_ADDRESS}/trip/${tripId}`,

  // review
  addReview: `${SERVER_ADDRESS}/review`,
  deleteReview: (reviewId: string) => `${SERVER_ADDRESS}/review/${reviewId}`,

  //trip request
  addTripRequest: `${SERVER_ADDRESS}/trip-request`,
  requestedTrip: `${SERVER_ADDRESS}/trip-request/requested`,
  joinRequests: `${SERVER_ADDRESS}/trip-request/join-requests`,
  responseRequest: `${SERVER_ADDRESS}/trip-request`,

  // profile
  editProfile: `${SERVER_ADDRESS}/profile`,
  changePassword: `${SERVER_ADDRESS}/profile/change-password`,

  // admin
  admin: {
    trips: `${SERVER_ADDRESS}/admin/trips`,
    users: `${SERVER_ADDRESS}/admin/users`,
    deleteTrip: (tripId: string) => `${SERVER_ADDRESS}/admin/trip/${tripId}`,
    updateUser: (userId: string) => `${SERVER_ADDRESS}/admin/user/${userId}`,
  },
};
