export type TLoggedUser = {
  name: string;
  email: string;
  _id: string;
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

export type TRequestTripId = {
  trip: string;
};
