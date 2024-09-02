import type { Metadata } from "next";
import "./globals.css";
import AppWagmiProvider from "@/lib/AppWagmiProvider";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Next.js WalletConnect SIWE Demo",
  description: "WalletConnect Web3Modal + SIWE + Next.js + NextAuth.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session} basePath="/next-api/api/auth">
          <AppWagmiProvider>{children}</AppWagmiProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
