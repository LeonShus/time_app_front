import {
	StyleFunctionProps,
	type ThemeConfig,
	extendTheme
} from '@chakra-ui/react'

import Button from './Button/Button'

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false
}

const theme = extendTheme({
	config,
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				bg: props.colorMode === 'light' ? 'gray.100' : 'gray.800'
			}
		})
	},
	components: {
		Button
	}
})

export default theme
