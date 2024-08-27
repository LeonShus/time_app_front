import { http } from 'api/interceptors'
import { ITimerSessionResponse, TypeTimerRoundFormState, TypeTimerSessionFormState } from 'types/timer.types'

class TimerService {
	private BASE_URL = '/user/timer'

	async getTodaySession() {
		const response = await http.get<ITimerSessionResponse>(
			`${this.BASE_URL}/today`
		)

		return response
	}

	async createSession() {
		const response = await http.post<ITimerSessionResponse>(this.BASE_URL)

		return response
	}

	async updateSession({
		id,
		data
	}: {
		id: string
		data: TypeTimerSessionFormState
	}) {
		const response = await http.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteSession({ id }: { id: string }) {
		const response = await http.delete(`${this.BASE_URL}/${id}`)
		return response
	}

	async updateRound({
		id,
		data
	}: {
		id: string
		data: TypeTimerRoundFormState
	}) {
		const response = await http.put(`${this.BASE_URL}/round/${id}`, data)
		return response
	}
}

export const timerService = new TimerService()
