import {
    ADD_USER,
    GET_USER,
    UsersDispatchTypes,
    UPDATE_MESSAGES_USER
   } from "../types/users";
import { UsersType } from "../types/users";

const users : any = localStorage.getItem('users_chat') 

const initialState : UsersType = {
  users : users ? JSON.parse(users) : []
}
   
const usersReducer = (state = initialState , action: UsersDispatchTypes)  => {
     switch (action.type) {
       case ADD_USER:
         return {
           users: [...state.users,action.payload]
         }
       case GET_USER:
         return {
           users : action.payload
         }
       case UPDATE_MESSAGES_USER:
         return {
           users: action.payload
         }
       default:
         return state
     }
   };
   
   
export default usersReducer