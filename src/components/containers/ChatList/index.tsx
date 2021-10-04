import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../store";
import { UserType } from "../../../store/types/user";
import {
  ContainerChatLIst,
  ChatListName,
  Username,
  IconName,
  TitleList,
  Tabs,
  Tab,
} from "./style";
import icon_edit from "../../../assets/images/icon_edit.svg";
import icon_check from "../../../assets/images/icon_check.svg";
import icon_close from "../../../assets/images/icon_close.svg";
import Users from "../Users";
import { GroupsType } from "../../../store/types/groups";
import { UsersType } from "../../../store/types/users";
import { renameUser } from "../../../store/action/user";
import { getUsers } from "../../../store/action/users";
import AddGroup from "../../elements/AddGroup";

interface TabSelected {
  number: number;
  name: string;
}

const ChatList: React.FC = () => {
  const dispatch = useDispatch();

  const user: UserType = useSelector((state: RootStore) => state.userReducer);
  const groups: GroupsType = useSelector(
    (state: RootStore) => state.groupsReducer
  );
  const users: UsersType = useSelector(
    (state: RootStore) => state.usersReducer
  );

  const [nameSelected, setNameSelected] = React.useState<string>(user.name);
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  const [tabSelected, setTabSelected] = React.useState<number>(0);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameSelected(e.target.value);
  };

  const handleCancelChange = () => {
    setNameSelected(user.name);
    setIsEditable(!isEditable);
  };

  const handleSucessName = () => {
    dispatch(renameUser(nameSelected));
    const newUsers = users.users.map((item) => {
      if (item.id === user.id) {
        return {
          ...item,
          name: nameSelected,
        };
      } else {
        return item;
      }
    });
    dispatch(getUsers(newUsers));
    localStorage.setItem("users_chat", JSON.stringify(newUsers));
    setIsEditable(!isEditable);
  };

  const TabSelected = ({ number, name }: TabSelected) => {
    return (
      <Tab
        tabSelected={tabSelected}
        tabNumber={number}
        onClick={() => setTabSelected(number)}
      >
        {name}
      </Tab>
    );
  };

  React.useEffect(() => {
    setNameSelected(user.name);
  }, [user]);

  return (
    <ContainerChatLIst>
      <TitleList>Bienvenido</TitleList>
      <ChatListName>
        <Username
          value={nameSelected}
          onChange={handleChangeName}
          disabled={!isEditable}
          isEditable={isEditable}
        />
        {!isEditable ? (
          <IconName
            src={icon_edit}
            width="20px"
            onClick={() => setIsEditable(!isEditable)}
            alt="icon_edit"
          />
        ) : (
          <>
            <IconName
              src={icon_check}
              width="20px"
              onClick={handleSucessName}
              alt="icon_check"
            />
            <IconName
              src={icon_close}
              width="20px"
              onClick={handleCancelChange}
              alt="icon_close"
            />
          </>
        )}
      </ChatListName>
      <Tabs>
        <TabSelected name="Grupos" number={0} />
        <TabSelected name="Usuarios" number={1} />
      </Tabs>
      {tabSelected === 0 && <Users users={groups.groups} />}
      {tabSelected === 1 && (
        <Users users={users.users.filter((item) => item.id !== user.id)} />
      )}
      {tabSelected === 0 && <AddGroup />}
    </ContainerChatLIst>
  );
};

export default ChatList;
