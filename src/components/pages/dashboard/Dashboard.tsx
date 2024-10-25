'use client'

import { useMutation } from '@tanstack/react-query'
import { Button } from 'components/uikit'
import { UserHeaderInfo } from 'components/widgets/UserHeaderInfo/ui/UserHeaderInfo'
import { authService } from 'services/auth.service'
import { userService } from 'services/user.service'

export const Dashboard = () => {
	const { mutate: getMe } = useMutation({
		// mutationKey: [],
		mutationFn: () => userService.getProfile()
	})


    
	return (
		<div>
			Dashboard
			<Button
				onClick={() => {
					getMe()
				}}
			>
				get me
			</Button>

            <UserHeaderInfo/>
            <UserHeaderInfo/>
            <UserHeaderInfo/>
            <UserHeaderInfo/>
            <UserHeaderInfo/>
            <UserHeaderInfo/>
            <UserHeaderInfo/>
            <UserHeaderInfo/>
            <UserHeaderInfo/>
		</div>
	)
}
