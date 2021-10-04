import React from "react";
import { useDispatch } from "react-redux";
import icon_user from "../../../assets/images/icon_user.svg";
import { selectedChat } from "../../../store/action/messages";
import { UserType } from "../../../store/types/user";
import { ItemUser, UserInfo } from "./style";

const User: React.FC<UserType> = ({ ...item }) => {
  const dispatch = useDispatch();

  return (
    <ItemUser onClick={() => dispatch(selectedChat(item))}>
      <img src={icon_user} width="50px" alt="icon_user" />
      <UserInfo>
        <p>{item.name}</p>
      </UserInfo>
    </ItemUser>
  );
};

export default User;
