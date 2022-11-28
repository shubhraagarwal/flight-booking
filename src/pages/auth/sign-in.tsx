import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface SignInFields {
  email: string;
  password: string;
}

export default function SignInPage() {
  const form = useForm<SignInFields>();
  const router = useRouter();

  async function onSubmit(fields: SignInFields) {
    try {
      await signIn("credentials", { ...fields, callbackUrl: "/" });
      await router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" {...form.register("email")} />
      <input
        type="password"
        placeholder="password"
        {...form.register("password")}
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
