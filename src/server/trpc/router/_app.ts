// src/server/router/_app.ts
import { router } from "../trpc";
import { airportsRouter } from "./airports";

import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  airports: airportsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
