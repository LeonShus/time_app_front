'use client'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
	Avatar,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import { Box } from 'components/uikit'
import { useLogoutMutation } from 'dataHooks/profile/useLogoutMutation'
import { useProfileQuery } from 'dataHooks/profile/useProfileQuery'

import { Text } from '@/shared'

export const UserHeaderInfo = () => {
	const { data, isLoading } = useProfileQuery()

	const logoutMutation = useLogoutMutation()

	const name = data?.user.name || data?.user.email.split('@')[0]

	const client = useQueryClient()

	console.log('client', client.getQueryData(['profile']))

	return (
		<Box width={'fit-content'}>
			<Flex
				alignItems={'center'}
				gap={2}
			>
				<Text>{name}</Text>
				<Menu>
					<MenuButton>
						<Avatar name={name} />
					</MenuButton>
					<MenuList>
						<MenuItem
							fontSize={16}
							onClick={() => {
								logoutMutation.mutate()
							}}
						>
							<Flex
								alignItems={'center'}
								width={'100%'}
								justifyContent={'space-between'}
							>
								Exit
								<ArrowForwardIcon />
							</Flex>
						</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		</Box>
	)
}
