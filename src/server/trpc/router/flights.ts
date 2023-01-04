import { router, publicProcedure } from "../trpc";
import { z } from "zod";
//@ts-ignore
import Amadeus from "amadeus";
import { env } from "@/env/server.mjs";
import { Flight } from "types";

const amadeus = new Amadeus({
  clientId: env.AMADEUS_KEY,
  clientSecret: env.AMADEUS_SECRET,
});

export const flightSearchSchema = z.object({
  from: z.string().transform((arg) => arg.split("-")[0]!.trim()),
  to: z.string().transform((arg) => arg.split("-")[0]!.trim()),
  adults: z.number(),
  children: z.number(),
  departureDate: z
    .string()
    .transform(
      (d) =>
      `${new Date(d).getFullYear()}-${
        new Date(d).getMonth() + 1 > 9
          ? new Date(d).getMonth() + 1
          : `0${new Date(d).getMonth() + 1}`
      }-${new Date(d).getDate()}`
    ),
  returnDate: z
    .string()
    .optional()
    .transform((d) =>
      d
        ? `${new Date(d).getFullYear()}-${
            new Date(d).getMonth() + 1 > 9
              ? new Date(d).getMonth() + 1
              : `0${new Date(d).getMonth() + 1}`
          }-${new Date(d).getDate()}`
        : undefined
    ),
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
});
