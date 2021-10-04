import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createUser } from "../store/action/user";
import { RootStore } from "../store";
import HomeView from "../views/Home";
import { addUser, getUsers } from "../store/action/users";
import { UserType } from "../store/types/user";
import { UsersType } from "../store/types/users";
import { GroupsType } from "../store/types/groups";
import { getGroups } from "../store/action/groups";

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const user: UserType = useSelector((state: RootStore) => state.userReducer);
  const users: UsersType = useSelector(
    (state: RootStore) => state.usersReducer
  );
  const groups: GroupsType = useSelector(
    (state: RootStore) => state.groupsReducer
  );

  React.useEffect(() => {
    const groupsSave = localStorage.getItem("groups_chat");
    dispatch(createUser());
    if (!groupsSave) {
      localStorage.setItem("groups_chat", JSON.stringify(groups.groups));
    }
  }, []);

  React.useEffect(() => {
    const usersSave: any = localStorage.getItem("users_chat");
    if (user.id) {
      if (usersSave) {
        dispatch(addUser(user));
        localStorage.setItem(
          "users_chat",
          JSON.stringify([...users.users, user])
        );
      } else {
        localStorage.setItem("users_chat", JSON.stringify([user]));
      }
    }
  }, [user.id]);

  React.useEffect(() => {
    setInterval(() => {
      const usersSave = localStorage.getItem("users_chat");
      const groupsSave = localStorage.getItem("groups_chat");
      if (usersSave) {
        dispatch(getUsers(JSON.parse(usersSave)));
      }
      if (groupsSave) {
        dispatch(getGroups(JSON.parse(groupsSave)));
      }
    }, 1000);
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
