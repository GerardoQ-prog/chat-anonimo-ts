import { MessageType } from "./messages"

export const ADD_GROUP = "ADD_GROUP"
export const GET_GROUPS = "GET_GROUPS"

export type GroupsType = {
    groups : GroupType[] 
}

export type GroupType = {
    id : number,
    name : string,
    messages: MessageType[]
}

export interface GroupAdd {
    type : typeof ADD_GROUP, 
    payload: GroupType
}

export interface GroupsGet {
    type : typeof GET_GROUPS,
    payload: GroupType[] 
}

export type GroupsDispatchTypes = GroupAdd | GroupsGet
