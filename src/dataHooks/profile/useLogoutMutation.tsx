import { useMutation } from "@tanstack/react-query"
import { authService } from "services/auth.service"



export const useLogoutMutation = () => {
    const data = useMutation({
		mutationKey: ['profile'],
		mutationFn: () => authService.logout()
	})

    return data
}