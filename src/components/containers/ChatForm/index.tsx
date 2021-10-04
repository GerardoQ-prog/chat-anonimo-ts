import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../store";
import { ChatType } from "../../../store/types/messages";
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
  const chat: ChatType = useSelector(
    (state: RootStore) => state.messagesReducer
  );

  console.log(chat);

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
          <ContainerMessages></ContainerMessages>
          <ContainerInput>
            <InputMessage />
            <ButtonSend>Enviar</ButtonSend>
          </ContainerInput>
        </ContainerChat>
      )}
    </div>
  );
};

export default ChatForm;
