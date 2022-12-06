import { ParsedUrlQueryInput } from "querystring";
declare module "amadeus";

export interface FlightsQueryParams extends ParsedUrlQueryInput {
  from: string;
  to: string;
  adults: number;
  children: number;
  departureDate: string | undefined;
  returnDate: string | undefined;
  roundTrip: string;
}
