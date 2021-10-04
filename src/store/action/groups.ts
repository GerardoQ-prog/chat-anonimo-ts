import {Dispatch} from "redux";
import { GroupsDispatchTypes, GroupType, GET_GROUPS, ADD_GROUP } from "../types/groups"

export const addNewGroup = (group: GroupType) => async (dispatch : Dispatch<GroupsDispatchTypes>)=> {
    dispatch({
        type: ADD_GROUP,
        payload: group
    })
}

export const getGroups = (groups : GroupType[]) => async (dispatch : Dispatch<GroupsDispatchTypes>)=> {
    dispatch({
        type: GET_GROUPS,
        payload: groups
    })
}