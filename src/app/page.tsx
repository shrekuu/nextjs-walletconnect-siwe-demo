import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-100 min-h-screen py-10">
      <div className="max-w-md mx-auto px-4">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Examples</h2>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
            <Link href="/login" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Login
            </Link>
          </li>
          <li>
            <Link href="/device-info" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              device info
            </Link>
          </li>
          <li>
            <Link href="/pepe" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Happy Pepe
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
