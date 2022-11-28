import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/server/db/client";
import bcrypt from "bcryptjs";
import { env } from "@/env/server.mjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: env.JWT_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "abc@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials;
        console.log(password);
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) return null;
        console.log("found user");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;
        console.log("password valid");

        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/sign-in",
  },
};

export default NextAuth(authOptions);
