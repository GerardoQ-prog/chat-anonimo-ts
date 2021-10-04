export const SELECT_CHAT = "SELECT_CHAT"
export const ADD_MESSAGE = "ADD_MESSAGE"

export type ChatType = {
    id : number,
    name : string,
    messages: MessageType[],
    typeUser:string
}

export type MessageType = {
    text : string,
    createdAt : string,
    idTransmitter: number,
    idReceiver: number
}

export interface ChatSelected {
    type : typeof SELECT_CHAT, 
    payload: ChatType
}

export interface ChatAddMessage {
    type : typeof ADD_MESSAGE, 
    payload: MessageType
}

export type ChatDispatchTypes = ChatSelected | ChatAddMessage
