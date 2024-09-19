'use client'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MainLayout } from 'components/layouts'
import { PropsWithChildren, useState } from 'react'
import theme from 'theme/theme'

export const Providers = ({ children }: PropsWithChildren) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<QueryClientProvider client={client}>
			<ChakraProvider theme={theme}>
				<MainLayout>{children}</MainLayout>
				{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
			</ChakraProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
