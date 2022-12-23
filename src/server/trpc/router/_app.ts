// src/server/router/_app.ts
import { router } from "../trpc";
import { airportsRouter } from "./airports";
import { flightsRouter } from "./flights";
import { userRouter } from "./users";

export const appRouter = router({
  airports: airportsRouter,
  users: userRouter,
  flights: flightsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
