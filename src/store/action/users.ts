import {Dispatch} from "redux";
import { UserType } from "../types/user";
import { ADD_USER, GET_USER, UsersDispatchTypes,UPDATE_MESSAGES_USER } from "../types/users"

export const addUser = (user : UserType) => async (dispatch : Dispatch<UsersDispatchTypes>)=> {
    dispatch({
        type: ADD_USER,
        payload: user
    })
}

export const getUsers = (users : UserType[]) => async (dispatch : Dispatch<UsersDispatchTypes>)=> {
    dispatch({
        type: GET_USER,
        payload: users
    })
}

export const updateMessagesUser = (users : UserType[]) => async (dispatch : Dispatch<UsersDispatchTypes>)=> {
    dispatch({
        type: UPDATE_MESSAGES_USER,
        payload: users
    })
}