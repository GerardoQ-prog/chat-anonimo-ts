import {Dispatch} from "redux";
import { generateID, generateName } from "../../helpers/utils/generateUser";
import { CREATE_USER, RENAME_USER, UserDispatchTypes } from "../types/user";

export const createUser = () => async (dispatch : Dispatch<UserDispatchTypes>)=> {
    dispatch({
        type: CREATE_USER,
        payload: {
            id:generateID(),
            name:generateName(),
            messages: [],
            typeUser:'user'
        }
    })
}

export const renameUser = (name : string) => async (dispatch : Dispatch<UserDispatchTypes>)=> {
    dispatch({
        type: RENAME_USER,
        payload: name
    })
}

