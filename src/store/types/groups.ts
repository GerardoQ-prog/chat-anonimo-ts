import { MessageType } from "./messages"

export const ADD_GROUP = "ADD_GROUP"
export const GET_GROUPS = "GET_GROUPS"
export const UPDATE_MESSAGES_GROUP = "UPDATE_MESSAGES_GROUP"

export type GroupsType = {
    groups : GroupType[] 
}

export type GroupType = {
    id : number,
    name : string,
    messages: MessageType[],
    typeUser: string
}

export interface GroupAdd {
    type : typeof ADD_GROUP, 
    payload: GroupType
}

export interface GroupsGet {
    type : typeof GET_GROUPS,
    payload: GroupType[] 
}

export interface GroupsUpdateMessages {
    type : typeof UPDATE_MESSAGES_GROUP,
    payload: MessageType
}

export type GroupsDispatchTypes = GroupAdd | GroupsGet | GroupsUpdateMessages
