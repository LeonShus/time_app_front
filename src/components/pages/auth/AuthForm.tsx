'use client'

import {
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { Button } from 'components/uikit'
import { DASBOARD_PAGES } from 'config/pages-url.config'
import { useRouter } from 'next/navigation'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { authService } from 'services/auth.service'
import { toast } from 'sonner'
import { IAuthForm } from 'types/auth.types'
import * as yup from 'yup'

import { Text } from '@/shared'

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup
			.string()
			.min(6, 'Password length should be at least 4 characters')
			.max(20, 'Password cannot exceed more than 12 characters')
			.required()
	})
	.required()

interface IProps {
	setIsRegister: (e: boolean) => void
}

export const AuthForm = ({ setIsRegister }: IProps) => {
	const { push } = useRouter()

	const { register, handleSubmit, reset, getValues, getFieldState, formState } =
		useForm<IAuthForm>({
			resolver: yupResolver(schema),
			reValidateMode: 'onBlur',
			mode: 'onChange'
		})

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main({ data, type: 'login' }),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}
	const onError: SubmitErrorHandler<IAuthForm> = data => {

	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<FormControl
					marginBottom={5}
					isInvalid={Boolean(formState.errors.email)}
				>
					<FormLabel>Email</FormLabel>
					<Input
						{...register('email')}
						placeholder='Enter email'
					/>
					{formState.errors.email && (
						<FormErrorMessage>Email is required.</FormErrorMessage>
					)}
				</FormControl>

				<FormControl
					marginBottom={5}
					isInvalid={Boolean(formState.errors.password)}
				>
					<FormLabel>Password</FormLabel>
					<Input
						type='password'
						{...register('password')}
						placeholder='Enter password'
					/>
					{formState.errors.password && (
						<FormErrorMessage>Password is required.</FormErrorMessage>
					)}
				</FormControl>

				<Flex
					justify={'space-between'}
					alignItems={'center'}
				>
					<Text
						onClick={() => {
							setIsRegister(true)
						}}
						type='link'
					>
						Registration
					</Text>

					<Button type='submit'>Submit</Button>
				</Flex>
			</form>
		</div>
	)
}
