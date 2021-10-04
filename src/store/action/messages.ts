import {Dispatch} from "redux";
import { SELECT_CHAT,ChatDispatchTypes, ChatType, MessageType, ADD_MESSAGE } from "../types/messages"

export const selectedChat = (chat: ChatType) => async (dispatch : Dispatch<ChatDispatchTypes>)=> {
    dispatch({
        type: SELECT_CHAT,
        payload: chat
    })
}

export const addMessage = (message: MessageType) => async (dispatch : Dispatch<ChatDispatchTypes>)=> {
    dispatch({
        type: ADD_MESSAGE,
        payload: message
    })
}