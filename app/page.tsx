import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1 className="text-7xl font-bold p-10">Hello Stranger!!</h1>
      <div>
      <Link href="/users" className="text-3xl">Click to see the Users.</Link>
      </div>
      <div className="mt-9">
      <Link href="/users/new" className="text-xl mt-9">Click here to see the new user page.</Link>
      </div>
    </main>
  );
}
