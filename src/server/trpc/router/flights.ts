import { router, publicProcedure } from "../trpc";
//@ts-ignore
import Amadeus from "amadeus";
import { env } from "@/env/server.mjs";
import { Flight } from "types";
import { flightBookingSchema } from "@/schemas/flightBookingSchema";
import { flightSearchSchema } from "@/schemas/flightSearchSchema";

const amadeus = new Amadeus({
  clientId: env.AMADEUS_KEY,
  clientSecret: env.AMADEUS_SECRET,
});

export const flightsRouter = router({
  search: publicProcedure
    .input(flightSearchSchema.nullable())
    .query(async ({ input }) => {
      if (!input) return;

      try {
        console.log("fetching...");
        console.log(input.returnDate);
        const data = await amadeus.shopping.flightOffersSearch.get({
          originLocationCode: input.from,
          destinationLocationCode: input.to,
          departureDate: input.departureDate,
          returnDate: input.returnDate,
          adults: input.adults,
          children: input.children,
          currencyCode: "USD",
        });
        console.log(data.result.data);
        return { flights: data.result.data as Flight[] };
      } catch (err) {
        console.error(err);
        return { flights: null };
      }
    }),

  booking: publicProcedure
    .input(flightBookingSchema)
    .mutation(async ({ input }) => {
      try {
        const booking = await amadeus.booking.flightOrders.post(
          JSON.stringify({
            data: {
              type: "flight-order",
              flightOffers: [input.flightOffer],
              travelers: input.travelers,
            },
          })
        );
        return { booking };
      } catch (err) {
        console.log("error while booking flight");
        console.error(err);
        return null;
      }
    }),
});
