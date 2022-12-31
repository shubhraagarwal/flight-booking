import { z } from "zod";

export const flightBookingSchema = z.object({
  flightOffer: z.object({
    instantTicketingRequired: z.boolean(),
    nonHomogeneous: z.boolean(),
    paymentCardRequired: z.boolean(),
    lastTicketingDate: z.string(),
    itineraries: z.array(
      z.union([
        z.object({
          segments: z.array(
            z.union([
              z.object({
                departure: z.object({
                  iataCode: z.string(),
                  terminal: z.string(),
                  at: z.string(),
                }),
                arrival: z.object({
                  iataCode: z.string(),
                  terminal: z.string(),
                  at: z.string(),
                }),
                carrierCode: z.string(),
                number: z.string(),
                aircraft: z.object({ code: z.string() }),
                operating: z.object({ carrierCode: z.string() }),
                duration: z.string(),
                id: z.string(),
                numberOfStops: z.number(),
              }),
              z.object({
                departure: z.object({
                  iataCode: z.string(),
                  terminal: z.string(),
                  at: z.string(),
                }),
                arrival: z.object({ iataCode: z.string(), at: z.string() }),
                carrierCode: z.string(),
                number: z.string(),
                aircraft: z.object({ code: z.string() }),
                operating: z.object({ carrierCode: z.string() }),
                duration: z.string(),
                id: z.string(),
                numberOfStops: z.number(),
              }),
              z.object({
                departure: z.object({ iataCode: z.string(), at: z.string() }),
                arrival: z.object({
                  iataCode: z.string(),
                  terminal: z.string(),
                  at: z.string(),
                }),
                carrierCode: z.string(),
                number: z.string(),
                aircraft: z.object({ code: z.string() }),
                operating: z.object({ carrierCode: z.string() }),
                duration: z.string(),
                id: z.string(),
                numberOfStops: z.number(),
              }),
            ])
          ),
        }),
        z.object({
          segments: z.array(
            z.union([
              z.object({
                departure: z.object({
                  iataCode: z.string(),
                  terminal: z.string(),
                  at: z.string(),
                }),
                arrival: z.object({ iataCode: z.string(), at: z.string() }),
                carrierCode: z.string(),
                number: z.string(),
                aircraft: z.object({ code: z.string() }),
                operating: z.object({ carrierCode: z.string() }),
                duration: z.string(),
                id: z.string(),
                numberOfStops: z.number(),
              }),
              z.object({
                departure: z.object({ iataCode: z.string(), at: z.string() }),
                arrival: z.object({
                  iataCode: z.string(),
                  terminal: z.string(),
                  at: z.string(),
                }),
                carrierCode: z.string(),
                number: z.string(),
                aircraft: z.object({ code: z.string() }),
                operating: z.object({ carrierCode: z.string() }),
                duration: z.string(),
                id: z.string(),
                numberOfStops: z.number(),
              }),
            ])
          ),
        }),
      ])
    ),
    price: z.object({
      currency: z.string(),
      total: z.string(),
      base: z.string(),
      fees: z.array(z.object({ amount: z.string(), type: z.string() })),
      grandTotal: z.string(),
      billingCurrency: z.string(),
    }),
    pricingOptions: z.object({
      fareType: z.array(z.string()),
      includedCheckedBagsOnly: z.boolean(),
    }),
    validatingAirlineCodes: z.array(z.string()),
    travelerPricings: z.array(
      z.object({
        travelerId: z.string(),
        fareOption: z.string(),
        travelerType: z.string(),
        price: z.object({
          currency: z.string(),
          total: z.string(),
          base: z.string(),
          taxes: z.array(z.object({ amount: z.string(), code: z.string() })),
        }),
        fareDetailsBySegment: z.array(
          z.object({
            segmentId: z.string(),
            cabin: z.string(),
            fareBasis: z.string(),
            brandedFare: z.string(),
            class: z.string(),
            includedCheckedBags: z.object({ quantity: z.number() }),
          })
        ),
      })
    ),
  }),
  travelers: z.array(
    z.object({
      id: z.string(),
      dateOfBirth: z.string(),
      gender: z.string(),
      contact: z.object({
        emailAddress: z.string(),
        phones: z.array(
          z.object({
            deviceType: z.string(),
            countryCallingCode: z.string(),
            number: z.string(),
          })
        ),
      }),
      name: z.object({ firstName: z.string(), lastName: z.string() }),
    })
  ),
});
