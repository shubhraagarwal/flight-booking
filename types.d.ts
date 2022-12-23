declare module "amadeus";

export interface FlightData {
  from: string;
  to: string;
  adults: number;
  children: number;
  departureDate: string | undefined;
  returnDate: string | undefined;
  roundTrip: string;
}
