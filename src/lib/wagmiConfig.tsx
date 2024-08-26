import { defaultWagmiConfig } from "@web3modal/wagmi";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Your WalletConnect Cloud project ID
// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

// 这个会导致项目报错, 奇怪
if (!projectId) throw new Error("Project ID is not defined");

// 2. Create wagmiConfig
const metadata = {
  name: "bond-demo",
  description: "WalletConnect Web3Modal + SIWE + Next.js + NextAuth.js",
  url: "https://nextjs-walletconnect-siwe-demo.linwise.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  mainnet,
  sepolia, // testnet
] as const;

export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
