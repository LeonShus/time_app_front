'use client'

import { Center, Heading } from '@chakra-ui/react'
import { Box } from 'components/uikit'
import { useState } from 'react'
import * as yup from 'yup'

import { AuthForm } from './AuthForm'
import { RegisterFom } from './RegisterFom'

const Auth = () => {
	const [isRegister, setIsRegister] = useState(false)

	return (
		<Center height={'100vh'}>
			<Box
				width={300}
				type='content'
				p={'20px'}
				shadow={'base'}
				borderRadius={10}
			>
				<Heading
					size='lg'
					className='mb-2'
				>
					{isRegister ? 'Registration' : 'Auth'}
				</Heading>

				{!isRegister && <AuthForm setIsRegister={setIsRegister} />}

				{isRegister && <RegisterFom setIsRegister={setIsRegister} />}
			</Box>
		</Center>
	)
}

export default Auth
