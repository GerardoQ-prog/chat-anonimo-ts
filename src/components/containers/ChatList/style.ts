import styled, { DefaultTheme } from "styled-components";

interface TabProps {
    tabNumber:number,
    tabSelected: number,
    theme?: DefaultTheme
}

interface UsernameProps {
    isEditable: boolean,
    theme?: DefaultTheme
}

export const Tab = styled.div`
    text-align: center;
    padding: 20px;
    width: 50%;
    border-bottom: ${ (props : TabProps) => props.tabSelected === props.tabNumber ? '2px solid white' : 'none'};
    font-weight: ${ (props : TabProps) => props.tabSelected === props.tabNumber ? 700 : 400};
    font-size: 18px;
    cursor: pointer;
`
export const Tabs = styled.div`
    display: flex;
    width: 100%;
`
export const IconName = styled.img`
    cursor: pointer;
    margin: 0px 10px;
`
export const Username = styled.input`
    background-color: ${ (props : UsernameProps) => props.isEditable ? props.theme?.colors.background : 'transparent'};
    color:${props => props.theme.colors.secondary};
    border:none;
    font-size: 20px;
    width: 50%;
    outline: none;
    padding: 8px;
    border-radius: 5px;
`
export const ChatListName = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TitleList = styled.h1`
    padding: 20px 20px 0px 20px;
`
export const ContainerChatLIst = styled.div`
    background: ${props => props.theme.colors.primary};
    border-radius: 10px 0px 0px 10px;
    color:${props => props.theme.colors.secondary};
    height: 1fr;
`
