import { router, publicProcedure } from "../trpc";
import { z } from "zod";
//@ts-ignore
import Amadeus from "amadeus";
import { env } from "@/env/server.mjs";
import { FlightData } from "types";

const amadeus = new Amadeus({
  clientId: env.AMADEUS_KEY,
  clientSecret: env.AMADEUS_SECRET,
});

// const flightSearchSchema = z.object({
//   originLocationCode: z.string(),
//   destinationLocationCode: z.string(),
//   departureDate: z
//     .date()
//     .transform((d) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`),
//   adults: z.string(),
// });

export const flightSearchSchema = z.object({
  from: z.string().transform((arg) => arg.split("-")[0]!.trim()),
  to: z.string().transform((arg) => arg.split("-")[0]!.trim()),
  adults: z.number(),
  children: z.number(),
  departureDate: z
    .string()
    .transform(
      (d) =>
        `${new Date(d).getFullYear()}-${new Date(d).getMonth() + 1}-${new Date(
          d
        ).getDate()}`
    ),
});

export const flightsRouter = router({
  search: publicProcedure
    .input(flightSearchSchema.nullable())
    .query(async ({ input }) => {
      if (!input) return;

      try {
        console.log("fetching...");
        console.log(input);
        const data = await amadeus.shopping.flightOffersSearch.get({
          originLocationCode: input.from,
          destinationLocationCode: input.to,
          departureDate: input.departureDate,
          adults: input.adults,
          children: input.children,
        });
        console.log(data.result.data);
        return { flights: data.result.data };
      } catch (err) {
        console.error(err);
      }
    }),
});
