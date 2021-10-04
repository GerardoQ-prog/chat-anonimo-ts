import styled from "styled-components";

export const UserInfo = styled.div`
  padding: 20px;
`;

export const ItemUser = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.terciary};
  &:hover {
    background: ${(props) => props.theme.colors.terciary};
  }
`;
