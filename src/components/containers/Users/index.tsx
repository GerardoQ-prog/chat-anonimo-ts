import React from "react";
import { GroupType } from "../../../store/types/groups";
import { UserType } from "../../../store/types/user";
import User from "../../elements/User";

interface UsersProps {
  users: UserType[] | GroupType[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div style={{ overflowY: "scroll", height: "50vh" }}>
      {users &&
        users.map((item) => {
          return <User key={item.id} {...item} />;
        })}
    </div>
  );
};

export default Users;
