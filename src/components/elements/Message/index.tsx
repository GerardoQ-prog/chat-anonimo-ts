import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../store";
import { MessageType } from "../../../store/types/messages";
import { UserType } from "../../../store/types/user";
import { ContainerMessage, TextMessage } from "./style";

const Message: React.FC<MessageType> = ({ ...item }) => {
  const user: UserType = useSelector((state: RootStore) => state.userReducer);

  return (
    <ContainerMessage idTransmitter={item.idTransmitter} idUser={user.id}>
      <TextMessage idTransmitter={item.idTransmitter} idUser={user.id}>
        {item.text}
      </TextMessage>
    </ContainerMessage>
  );
};

export default Message;
