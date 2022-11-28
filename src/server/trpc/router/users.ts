import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { prisma } from "@/server/db/client";
import bcrypt from "bcryptjs";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const userRouter = router({
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(1),
        passwordConfirm: z.string().min(1),
      })
    )
    .mutation(async ({ input }) => {
      const { email, password, passwordConfirm } = input;
      if (password !== passwordConfirm) {
        throw new TRPCError({
          message: "Passwords do not match",
          code: "BAD_REQUEST",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      try {
        const user = await prisma.user.create({
          data: { email, password: hashedPassword },
        });
        return user;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          throw new TRPCError({
            message: "User already exists",
            code: "BAD_REQUEST",
          });
        }
      }
    }),
});
