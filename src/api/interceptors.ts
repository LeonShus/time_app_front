import axios, { type CreateAxiosDefaults } from 'axios'
import { getAccessToken, removeFromStorage } from 'services/auth-token.service'

import { errorCatch } from './errors'
import { authService } from 'services/auth.service'

const options: CreateAxiosDefaults = {
	baseURL: process.env.API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const httpBase = axios.create(options)

const http = axios.create(options)

http.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

http.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.satus === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error?.config && !error.config._isRetry
		) {
            originalRequest._isRetry = true

            try {
                await authService.getNewTokens()

                return http.request(originalRequest)
            } catch (error) {
                if(errorCatch(error) === 'jwt expired') {
                    removeFromStorage()
                }
            }
        }
			throw error
	}
)


export {
    http,
    httpBase
}
