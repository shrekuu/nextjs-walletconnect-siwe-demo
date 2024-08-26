import type { Metadata } from "next";
import "./globals.css";
import AppWagmiProvider from "@/lib/AppWagmiProvider";

export const metadata: Metadata = {
  title: "Next.js WalletConnect SIWE Demo",
  description: "WalletConnect Web3Modal + SIWE + Next.js + NextAuth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWagmiProvider>{children}</AppWagmiProvider>
      </body>
    </html>
  );
}
