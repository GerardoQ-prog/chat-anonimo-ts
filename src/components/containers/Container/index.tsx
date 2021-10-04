import React from "react";
import { ContainerGeneral } from "./style";

const ContainerChat: React.FC<any> = ({ renderList, renderChat }) => {
  return (
    <ContainerGeneral>
      {renderList()}
      {renderChat()}
    </ContainerGeneral>
  );
};

export default ContainerChat;
