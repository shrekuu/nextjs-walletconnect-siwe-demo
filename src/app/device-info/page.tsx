"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [userAgent, setUserAgent] = useState("");
  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="p-10">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Device Info</h2>

        <div className="p-4">
          <blockquote className="text-sm text-gray-600 dark:text-white">
            <p>navigator.userAgent: {userAgent}</p>
          </blockquote>
        </div>

        <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
          <li>
            <a href="metamask://dapp/qq.com" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Jump to MetaMask v1 (metamask://dapp/qq.com)
            </a>
          </li>
          <li>
            <a href="https://metamask.app.link/dapp/qq.com" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Jump to MetaMask v2 (https://metamask.app.link/dapp/qq.com)
            </a>
          </li>
          <li>
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
              onClick={() => alert(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))}
            >
              Is this a mobile device?{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
