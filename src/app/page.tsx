import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-100 h-screen w-screen flex items-center justify-center gap-10 flex-wrap p-10">
      <Link href="/login">Login</Link>
      <Link href="/pepe">Happy Pepe</Link>
    </div>
  );
}
