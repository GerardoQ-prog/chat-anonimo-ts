import { UserType } from "./user"

export const ADD_USER = "ADD_USER"
export const GET_USER = "GET_USER"
export const UPDATE_MESSAGES_USER = "UPDATE_MESSAGES_USER"

export type UsersType = {
    users : UserType[] 
}
export interface UsersAdd {
    type : typeof ADD_USER,
    payload: UserType
}

export interface UsersGet {
    type : typeof GET_USER,
    payload: UserType[]
}

export interface UsersUpdateMessages {
    type : typeof UPDATE_MESSAGES_USER,
    payload: UserType[] 
}

export type UsersDispatchTypes = UsersAdd | UsersGet | UsersUpdateMessages