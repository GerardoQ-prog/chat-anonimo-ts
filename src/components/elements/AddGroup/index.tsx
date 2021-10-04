import React from "react";
import { ButtonAdd, ContainerAdd, IconAdd, InputGroup } from "./style";
import icon_check from "../../../assets/images/icon_check.svg";
import icon_close from "../../../assets/images/icon_close.svg";
import { generateID } from "../../../helpers/utils/generateUser";
import { useDispatch, useSelector } from "react-redux";
import { addNewGroup } from "../../../store/action/groups";
import { GroupsType } from "../../../store/types/groups";
import { RootStore } from "../../../store";

const AddGroup = () => {
  const dispatch = useDispatch();
  const groups: GroupsType = useSelector(
    (state: RootStore) => state.groupsReducer
  );
  const [canAdd, setCanAdd] = React.useState(false);
  const [nameGroup, setNameGroup] = React.useState("");

  const handleCan = () => setCanAdd(!canAdd);
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameGroup(e.target.value);
  };

  const handleAddGroup = () => {
    const newGroup = {
      id: generateID(),
      name: nameGroup,
      messages: [],
      typeUser: "group",
    };
    dispatch(addNewGroup(newGroup));
    localStorage.setItem(
      "groups_chat",
      JSON.stringify([...groups.groups, newGroup])
    );
    setNameGroup("");
    handleCan();
  };

  return (
    <ContainerAdd>
      {!canAdd ? (
        <ButtonAdd onClick={handleCan}>+</ButtonAdd>
      ) : (
        <div>
          <InputGroup
            placeholder="Nombre"
            value={nameGroup}
            onChange={handleChangeName}
          />
          <IconAdd
            src={icon_check}
            width="20px"
            alt="icon_check"
            onClick={handleAddGroup}
          />
          <IconAdd
            src={icon_close}
            width="20px"
            alt="icon_close"
            onClick={() => setCanAdd(!canAdd)}
          />
        </div>
      )}
    </ContainerAdd>
  );
};

export default AddGroup;
