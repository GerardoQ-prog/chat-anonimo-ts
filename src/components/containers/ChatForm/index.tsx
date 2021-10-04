import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../store";
import { addMessage } from "../../../store/action/messages";
import { updateMessagesUser } from "../../../store/action/users";
import { ChatType } from "../../../store/types/messages";
import { UserType } from "../../../store/types/user";
import { UsersType } from "../../../store/types/users";
import Message from "../../elements/Message";
import {
  ButtonSend,
  ContainerChat,
  ContainerInput,
  ContainerMessages,
  ContainerName,
  ContainerWelcome,
  InputMessage,
} from "./style";

const ChatForm: React.FC = () => {
  const dispatch = useDispatch();

  const user: UserType = useSelector((state: RootStore) => state.userReducer);
  const users: UsersType = useSelector(
    (state: RootStore) => state.usersReducer
  );
  const chat: ChatType = useSelector(
    (state: RootStore) => state.messagesReducer
  );

  const [message, setMessage] = React.useState("");

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    const newMessage = {
      text: message,
      createdAt: new Date().toString(),
      idTransmitter: user.id,
      idReceiver: chat.id,
    };
    dispatch(addMessage(newMessage));
    if (chat.typeUser === "user") {
      const newUsers = users.users.map((item) => {
        if (item.id === chat.id || item.id === user.id) {
          return {
            ...item,
            messages: [...item.messages, newMessage],
          };
        }
        return item;
      });
      dispatch(updateMessagesUser(newUsers));
      localStorage.setItem("users_chat", JSON.stringify(newUsers));
    }
    setMessage("");
  };

  return (
    <div>
      {!chat ? (
        <ContainerWelcome>
          <h1>Escoja el chat</h1>
          <p>Hecho por Gerardo Quispe</p>
        </ContainerWelcome>
      ) : (
        <ContainerChat>
          <ContainerName>
            <h2>{chat.name}</h2>
          </ContainerName>
          <ContainerMessages>
            {chat.messages &&
              chat.messages.map((item, index) => (
                <Message key={index} {...item} />
              ))}
          </ContainerMessages>
          <ContainerInput>
            <InputMessage
              placeholder="Escribir mensaje"
              value={message}
              onChange={handleChangeMessage}
            />
            <ButtonSend onClick={handleSend}>Enviar</ButtonSend>
          </ContainerInput>
        </ContainerChat>
      )}
    </div>
  );
};

export default ChatForm;
