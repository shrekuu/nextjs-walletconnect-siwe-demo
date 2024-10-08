import type { Metadata } from "next";
import "./globals.css";
import AppWagmiProvider from "@/lib/AppWagmiProvider";
import NextAuthSessionProvider from "@/lib/NextAuthSessionProvider";
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
    <html lang="en" className="font-sans">
      <body>
        <NextAuthSessionProvider session={session}>
          <AppWagmiProvider>{children}</AppWagmiProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
