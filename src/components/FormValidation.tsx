import * as yup from "yup";

export const flightSearchSchema = yup.object().shape({
    fromWhere : yup.string().min(2),
    toWhere: yup.string().min(2),
    departureDate: yup.date(),
    returnDate: yup.date(),
})

export const passengerSchema = yup.object().shape({
    firstName: yup.string().min(2),
    lastName: yup.string().min(2),
    knowles: yup.string().min(2),
    suffix: yup.string().min(2),
    birthday: yup.date(),
    email: yup.string().email(),
    id: yup.number(),
    mobile: yup.number(),
})