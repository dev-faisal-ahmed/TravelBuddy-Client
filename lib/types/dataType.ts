export type TUserRole = 'ADMIN' | 'USER';

export type TUserStatus = 'ACTIVE' | 'BLOCKED';

export type TUser = {
  _id: string;
  email: string;
  phone?: string;
  name: string;
  password: string;
  photoUrl: string;
  role: TUserRole;
  status: TUserStatus;
};

export type TLoggedUser = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: TUserRole;
};

export type TTripType = 'ADVENTURE' | 'BUSINESS' | 'LEISURE' | 'STUDY_TOUR';

export type TTrip = {
  _id: string;
  user: string;
  images: string[];
  destination: string;
  description: string;
  itinerary: string;
  startDate: Date;
  endDate: Date;
  tripType: TTripType;
};

export type TRequestedTripId = {
  trip: {
    _id: string;
  };
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type TTripRequestStatus = 'PENDING' | 'ACCEPTED';

export type TRequestedTrip = {
  _id: string;
  trip: TTrip;
  phone: string;
  address: string;
  status: TTripRequestStatus;
};

export type TAdminTrip = TTrip & {
  user: { name: string };
};

export type TJoinRequest = {
  _id: string;
  user: TUser;
  trip: TTrip;
  phone: string;
  address: string;
  status: TTripRequestStatus;
};

export type TTopRequestTrip = TTrip & { requestedTrips: any[] };
