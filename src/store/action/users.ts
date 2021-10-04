import {Dispatch} from "redux";
import { UserType } from "../types/user";
import { ADD_USER, GET_USER, UsersDispatchTypes } from "../types/users"

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