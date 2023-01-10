import { z } from "zod";

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
