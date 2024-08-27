import { http } from 'api/interceptors'
import { ITaskResponse, TypeTaskFormState } from 'types/task.types'

class TaskService {
	private BASE_URL = '/user/tasks'

	async getTasks() {
		const response = await http.get<ITaskResponse[]>(this.BASE_URL)

		return response
	}

	async createTask({ data }: { data: TypeTaskFormState }) {
		const response = await http.post(this.BASE_URL, data)
		return response
	}

	async updateTask({ id, data }: { id: string; data: TypeTaskFormState }) {
		const response = await http.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTask({ id }: { id: string }) {
		const response = await http.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const taskService = new TaskService()
