import { IDefaultFields } from './root.types'

export interface ITimeBlockResponse extends IDefaultFields {
	name: string
	color?: string
	duration: number
	order: number
}

export type TypeTimeBlockFormState = Partial<
	Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>
>
