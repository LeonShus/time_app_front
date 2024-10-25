'use client'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, Grid, GridItem, useColorMode } from '@chakra-ui/react'
import { Box, Button } from 'components/uikit'
import { ThemeButton } from 'components/widgets'
import { UserHeaderInfo } from 'components/widgets/UserHeaderInfo/ui/UserHeaderInfo'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface IProps {
	children: ReactNode
}

const MainLayout = ({ children }: IProps) => {
	const pathName = usePathname()

	const withLayout = !pathName.includes('/auth')

	if (!withLayout) {
		return children
	}

	return (
		<Box minH={'100vh'}>
			{/* <Button onClick={toggleColorMode}>
				Theme {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button> */}

			<Grid
				templateAreas={`"header header"
                  "nav main"`}
				gridTemplateRows={'70px 1fr'}
				gridTemplateColumns={'150px 1fr'}
				minHeight={'100vh'}
				// gap='1'
				color='blackAlpha.700'
				fontWeight='bold'
			>
				<GridItem
					padding={'10px 20px'}
					bg='orange.300'
					area={'header'}
				>
					<Box>
						<Flex
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<ThemeButton />
							<UserHeaderInfo />
						</Flex>
					</Box>
				</GridItem>
				<GridItem
					pl='2'
					bg='pink.300'
					area={'nav'}
				>
					Nav
				</GridItem>
				<GridItem
					pl='2'
					bg='green.300'
					area={'main'}
				>
					{children}
				</GridItem>
			</Grid>
		</Box>
	)
}

export default MainLayout
