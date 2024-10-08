import { httpBase } from 'api/interceptors'
import { IAuthForm, IAuthResponse } from 'types/auth.types'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
	async main({ data, type }: { type: 'login' | 'register'; data: IAuthForm }) {
		const response = await httpBase.post<IAuthResponse>(`auth/${type}`, data)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}
		return response
	},

	async getNewTokens() {
		const response = await httpBase.post<IAuthResponse>(
			`auth/login/access-token`
		)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}
		return response
	},

    async logout() {
		const response = await httpBase.post<boolean>(
			`auth/logout`
		)

		if (response.data) {
			removeFromStorage()
		}
		return response
	}
}
