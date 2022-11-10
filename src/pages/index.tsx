import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl">This is home page</h1>
      <Link href="/flights">
        <button className="btn-primary btn">Go to flights page</button>
      </Link>
    </div>
  );
}
