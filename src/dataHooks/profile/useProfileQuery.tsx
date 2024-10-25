'use client'


import { useQuery } from "@tanstack/react-query"
import { userService } from "services/user.service"

export const useProfileQuery = () => {
    const data = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile()
	})


    return data
}