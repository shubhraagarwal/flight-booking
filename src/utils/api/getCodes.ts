import { env } from "@/env/server.mjs";
import Amadeus from "amadeus";

const amadeus = new Amadeus({
  clientId: env.AMADEUS_KEY,
  clientSecret: env.AMADEUS_SECRET,
});

async function getCodes() {
  // if v2 doesnt work, use v1
  const data = await amadeus.client.get("/v1/reference-data/locations");
  return data;
}

export default getCodes;
