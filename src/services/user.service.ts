import { http } from "api/interceptors";
import { IUser, TypeUserForm } from "types/auth.types";


export interface IProfileResponse {
    user: IUser
    statistics: {
        label: string
        value: string
    }
}

class UserService {
    private BASE_URL = 'user/profile'

    async getProfile() {
        const response = await http.get<IProfileResponse>(this.BASE_URL)

        return response.data
    }

    async update(data: TypeUserForm) {
        const response = await http.put(this.BASE_URL, data)
        return response.data
    }
}


export const userService = new UserService()