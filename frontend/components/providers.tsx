"use client"

import * as React from "react"
// import "@rainbow-me/rainbowkit/styles.css"
// import {
//   RainbowKitProvider,
//   getDefaultWallets,
//   connectorsForWallets,
// } from "@rainbow-me/rainbowkit"
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from "@rainbow-me/rainbowkit/wallets"
// import { configureChains, createConfig, WagmiConfig } from "wagmi"
// import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains"
// import { alchemyProvider } from "wagmi/providers/alchemy"
import { TooltipProvider } from "@radix-ui/react-tooltip"

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
//   ],
//   [alchemyProvider({ apiKey: 'dSQNYeKUoRKYzHx0jcbCW91Z8A2vQUCL' })]
// )

// const projectId = "GHH_ID"

// const { wallets } = getDefaultWallets({
//   appName: "Global Hacker House",
//   projectId,
//   chains,
// })

// const demoAppInfo = {
//   appName: "Global Hacker House",
// }

// const connectors = connectorsForWallets([
//   ...wallets,
//   {
//     groupName: "Other",
//     wallets: [
//       argentWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       ledgerWallet({ projectId, chains }),
//     ],
//   },
// ])

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// })

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <TooltipProvider delayDuration={0}>{mounted && children}</TooltipProvider>
  )

  return (
    // <WagmiConfig config={wagmiConfig}>
    //   <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
    <TooltipProvider delayDuration={0}>{mounted && children}</TooltipProvider>
    //   </RainbowKitProvider>
    // </WagmiConfig>
  )
}
