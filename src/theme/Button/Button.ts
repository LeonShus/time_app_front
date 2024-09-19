import { StyleFunctionProps, defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
	// The styles all button have in common
	baseStyle: {
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderRadius: 'base' // <-- border radius is same for all variants and sizes
	},
	// Two sizes: sm and md
	sizes: {
		sm: {
			fontSize: 'sm',
			px: 4, // <-- px is short for paddingLeft and paddingRight
			py: 3 // <-- py is short for paddingTop and paddingBottom
		},
		md: {
			fontSize: 'md',
			px: 6, // <-- these values are tokens from the design system
			py: 3 // <-- these values are tokens from the design system
		}
	},
	// Two variants: outline and solid
	variants: {
		outline: {
			border: '2px solid',
			borderColor: 'red.100',
			color: 'red.100'
		},
		solid: {
			bg: 'purple.500',
			color: 'white'
		},
		main: (props: StyleFunctionProps) => {
			const isLight = props.colorMode === 'light'

			return {
				color: isLight ? 'red' : 'yellow',
				border: '3px solid',
				borderColor: 'red.100',
				// borderRadius: '10px',
				_hover: {
					color: isLight ? 'black' : 'white',
					borderColor: 'red'
				}
			}
		}
	},
	// The default size and variant values
	defaultProps: {
		size: 'md',
		variant: 'main'
	}
})

export default Button
