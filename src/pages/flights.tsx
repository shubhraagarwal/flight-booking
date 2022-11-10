import Link from "next/link";

export default function FlightsPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl">This is flights page</h1>
      <Link href="/">
        <button className="btn-primary btn">Go to home page</button>
      </Link>
    </div>
  );
}
