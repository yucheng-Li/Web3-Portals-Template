/*
| Developed by Starton
| Filename : wagmi.service.tsx
*/
import { http, createConfig } from 'wagmi'
import { mainnet, optimism, polygon } from 'wagmi/chains'

// Wagmi config : configure desired chains to be used.
// Need to setup chains or providers ? Go here : https://wagmi.sh/docs/providers/configuring-chains
// ----------------------------------------------------------------------------
// export const { chains, publicClient, webSocketPublicClient } = configureChains(
// 	[mainnet, optimism, polygon],
// 	[publicProvider()],
// )

//Init Wagmi config
export const wagmiConfig = createConfig({
	chains: [mainnet, optimism, polygon],
	transports: {
		[mainnet.id]: http(),
		[optimism.id]: http(),
		[polygon.id]: http(),
	},
})
