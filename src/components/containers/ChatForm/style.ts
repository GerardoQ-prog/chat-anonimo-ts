import styled, { DefaultTheme } from "styled-components";

export const ButtonSend = styled.button`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;
`
export const InputMessage = styled.input`
    padding: 8px;
    width: 100%;
    margin-right: 20px;
    outline: none;
    border:1px solid #dddddd;
`
export const ContainerInput = styled.div`
    background: ${props => props.theme.colors.input};
    padding: 20px;
    border-radius: 0px 0px 10px 0px;
    display: flex;
`
export const ContainerMessages = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
`
export const ContainerName = styled.div`
    background: ${props => props.theme.colors.input};
    padding: 20px;
    color: ${props => props.theme.colors.primary};
    border-radius: 0px 10px 0px 0px;
`
export const ContainerChat = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const ContainerWelcome = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`