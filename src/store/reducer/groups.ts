import { ADD_GROUP, GET_GROUPS, GroupsDispatchTypes, GroupsType } from "../types/groups";

const initialState: GroupsType = {
   groups: [
       {
           id:1,
           name:'Grupo de Matematica',
           messages: []
       },
       {
            id:2,
            name:'Grupo de Ciencia',
            messages: []
        },
   ]
 }
   
const groupsReducer = (state = initialState, action: GroupsDispatchTypes)  => {
    switch (action.type) {
        case ADD_GROUP:
          return {
            groups: [...state.groups,action.payload]
          }
        case GET_GROUPS:
          return {
            groups : action.payload
          }
        default:
          return state
      }
};
   
   
export default groupsReducer