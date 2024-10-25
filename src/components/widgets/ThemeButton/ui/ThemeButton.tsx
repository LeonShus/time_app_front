'use client'

import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useColorMode } from "@chakra-ui/react"

export const ThemeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<div>
			{colorMode === 'dark' && (
				<SunIcon
					cursor={'pointer'}
					w={6}
					h={6}
					onClick={toggleColorMode}
					color={'gray.400'}
				/>
			)}

			{colorMode === 'light' && (
				<MoonIcon
					cursor={'pointer'}
					color={'gray.400'}
					w={6}
					h={6}
					onClick={toggleColorMode}
				/>
			)}
		</div>
	)
}
