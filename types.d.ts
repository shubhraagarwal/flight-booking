import { ParsedUrlQueryInput } from "querystring";
declare module "amadeus";

export interface FlightsQueryParams extends ParsedUrlQueryInput {
  from: string;
  to: string;
  departureDate: string | undefined;
  returnDate: string | undefined;
  roundTrip: string;
}
