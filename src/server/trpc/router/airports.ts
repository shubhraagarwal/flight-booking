import { router, publicProcedure } from "../trpc";
import { z } from "zod";
//@ts-ignore
import Amadeus from "amadeus";
import { env } from "@/env/server.mjs";

const amadeus = new Amadeus({
  clientId: env.AMADEUS_KEY,
  clientSecret: env.AMADEUS_SECRET,
});

export const airportsRouter = router({
  search: publicProcedure
    .input(z.object({ keyword: z.string().min(1) }))
    .query(async ({ input }) => {
      console.log("fetching");
      const data = await amadeus.referenceData.locations.get({
        keyword: input.keyword,
        subType: Amadeus.location.city,
        // subType: Amadeus.location.airport,
        // subType: Amadeus.location.any,
      });
      const iataCodes: string[] = data.data.map(
        (location: any) => `${location.iataCode} - ${location.name}`
      );
      console.log(iataCodes);
      return iataCodes;
    }),
});
