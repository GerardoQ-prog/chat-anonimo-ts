import { MessageType } from "./messages"

export const CREATE_USER = "CREATE_USER"
export const RENAME_USER = "RENAME_USER"

export type UserType = {
    id : number,
    name : string,
    messages : MessageType[],
    typeUser:string
}

export interface UserCreate {
    type : typeof CREATE_USER,
    payload : UserType
}

export interface UserRename {
    type : typeof RENAME_USER,
    payload : string
}

export type UserDispatchTypes = UserCreate | UserRename