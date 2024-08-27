import { http } from 'api/interceptors'
import {
	ITimeBlockResponse,
	TypeTimeBlockFormState
} from 'types/time-block.types'

class TimeBlockService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlocks() {
		const response = await http.get<ITimeBlockResponse>(this.BASE_URL)

		return response
	}

	async createTimeBlock({ data }: { data: TypeTimeBlockFormState }) {
		const response = await http.post(this.BASE_URL, data)
		return response
	}

	async updateOrderTimeBlock({ ids }: { ids: string[] }) {
		const response = await http.put(`${this.BASE_URL}/update-order`, { ids })
		return response
	}

	async updateTimeBlock({
		id,
		data
	}: {
		id: string
		data: TypeTimeBlockFormState
	}) {
		const response = await http.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTimeBlock({ id }: { id: string }) {
        const response = await http.delete(`${this.BASE_URL}/${id}`)
        return response
    }
}

export const timeBlockService = new TimeBlockService()
