import { Text as ChakraText, TextProps } from '@chakra-ui/react'

interface IProps extends TextProps {
	type?: 'default' | 'link'
}

const TYPES = {
	default: {},
	link: {
		cursor: 'pointer',
		color: 'blue.400',
		_hover: { color: 'orange' }
	}
}

const Text = ({
	children,
	type = 'default',
	fontSize = 'medium',
	...props
}: IProps) => {
	const typeProps = TYPES[type]

	return (
		<ChakraText
			fontSize={fontSize}
			{...typeProps}
			{...props}
		>
			{children}
		</ChakraText>
	)
}

export default Text
