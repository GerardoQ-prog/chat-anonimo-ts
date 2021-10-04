import styled , { DefaultTheme } from "styled-components";

interface ContainerMessageProps {
    idUser: number,
    idTransmitter:number,
    theme?: DefaultTheme

}

export const TextMessage = styled.p`
    background: ${(props : ContainerMessageProps) => props.idUser === props.idTransmitter ? props.theme?.colors.primary : props.theme?.colors.input };
    color: ${(props : ContainerMessageProps) => props.idUser === props.idTransmitter ? props.theme?.colors.secondary : 'black'};
    padding: 10px;
    margin: 20px;
`
export const ContainerMessage = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${(props : ContainerMessageProps) => props.idUser === props.idTransmitter ? 'flex-end' : 'flex-start'};
`