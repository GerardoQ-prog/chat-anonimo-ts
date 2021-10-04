import {
   CREATE_USER,
   RENAME_USER,
   UserDispatchTypes,
   UserType,
  } from "../types/user";

const initialState: UserType = {
  id:0,
  name:'',
  messages:[],
  typeUser: ''
}
  
const userReducer = (state = initialState, action: UserDispatchTypes)  => {
    switch (action.type) {
      case CREATE_USER:
        return action.payload
      case RENAME_USER:
        return {
          ...state,
          name: action.payload
        }
      default:
        return state
    }
  };
  
  
  export default userReducer