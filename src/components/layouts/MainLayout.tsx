import { useColorMode } from '@chakra-ui/react'
import { Box, Button } from 'components/uikit'
import { ReactNode } from 'react'

interface IProps {
	children: ReactNode
}

const MainLayout = ({ children }: IProps) => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box minH={'100vh'}>
			<Button onClick={toggleColorMode}>
				Theme {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>

			{children}
		</Box>
	)
}


export default MainLayout
