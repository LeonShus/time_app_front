import {
	BoxProps,
	Box as ChakraBox,
	ChakraComponent,
	useColorModeValue
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface IProps extends BoxProps {
	children: ReactNode
	type?: 'content' | 'base'
}

const THEME_COLORS = {
	content: {
		light: 'white',
		dark: 'gray.700',
	},
	base: {
		light: 'base',
		dark: 'base'
	}
}

const Box = ({ children, type = 'base', ...props }: IProps) => {
	const bg = useColorModeValue(
		THEME_COLORS[type].light,
		THEME_COLORS[type].dark
	)

	return (
		<ChakraBox
			bg={bg}
			{...props}
		>
			{children}
		</ChakraBox>
	)
}

export default Box
