'use client'

import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
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
			.required(),
		confirm_password: yup
			.string()
			.min(6, 'Password length should be at least 4 characters')
			.max(20, 'Password cannot exceed more than 12 characters')
			.oneOf([yup.ref('password'), 'Passwords do not match'])
			.required()
	})
	.required()

interface IRegisterForm extends IAuthForm {
	confirm_password: string
}

interface IProps {
	setIsRegister: (e: boolean) => void
}

export const RegisterFom = ({ setIsRegister }: IProps) => {
	const { register, handleSubmit, reset, getValues, getFieldState, formState } =
		useForm<IRegisterForm>({
			resolver: yupResolver(schema),
			reValidateMode: 'onBlur',
			mode: 'onChange'
		})

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IRegisterForm) => {
			return authService.main({ data, type: 'register' })
		},

		onSuccess() {
			toast.success('Successfully Register!')
            setIsRegister(false)
			reset()
		}
	})

	const onSubmit: SubmitHandler<IRegisterForm> = data => {
		mutate(data)
	}
	const onError: SubmitErrorHandler<IRegisterForm> = data => {
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

				<FormControl
					marginBottom={5}
					isInvalid={Boolean(formState.errors.confirm_password)}
				>
					<FormLabel>Confirm Password</FormLabel>
					<Input
						type='password'
						{...register('confirm_password')}
						placeholder='Enter password'
					/>
					{formState.errors && (
						<FormErrorMessage>Passwords do not match</FormErrorMessage>
					)}
				</FormControl>

				<Flex
					justify={'space-between'}
					alignItems={'center'}
				>
					<Text
						onClick={() => {
							setIsRegister(false)
						}}
						type='link'
					>
						Auth
					</Text>

					<Button type='submit'>Submit</Button>
				</Flex>
			</form>
		</div>
	)
}
