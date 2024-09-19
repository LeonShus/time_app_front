import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

interface IProps extends ButtonProps {}

const Button = ({ children, ...props }: IProps) => {
	return <ChakraButton {...props}>{children}</ChakraButton>
}


export default Button