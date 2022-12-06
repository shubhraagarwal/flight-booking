import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface SignUpFields {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUpPage() {
  const { mutateAsync } = trpc.users.signUp.useMutation();
  const form = useForm<SignUpFields>();
  const router = useRouter();

  async function onSubmit(fields: SignUpFields) {
    try {
      await mutateAsync(fields);
      await router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...form.register("name")} />
      <input type="email" placeholder="email" {...form.register("email")} />
      <input
        type="password"
        placeholder="password"
        {...form.register("password")}
      />
      <input
        type="password"
        placeholder="password confirm"
        {...form.register("passwordConfirm")}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
