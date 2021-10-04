import { MessageType, ChatDispatchTypes,SELECT_CHAT, ADD_MESSAGE, ChatType } from "../types/messages";

const initialState: any = null

const messagesReducer = (state = initialState , action: ChatDispatchTypes)  => {
     switch (action.type) {
       case SELECT_CHAT:
         return action.payload
       case ADD_MESSAGE:
         return {
           ...state,
           messages:[...state.messages, action.payload]
         }
       default:
         return state
     }
};
   
export default messagesReducer