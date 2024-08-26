import { IDefaultFields } from "./root.types";

export interface ITimerRoundResponse extends IDefaultFields {
    isCompleted?: boolean
    totalSeconds: number
}


export interface ITimerSessionResponse extends IDefaultFields {
    isCompleted?: boolean
    rounds?: ITimerRoundResponse[]
}


export type TypeTimerSessionFormState = Partial<Omit<ITimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>>

export type TypeTimerRoundState = Partial<Omit<ITimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>>