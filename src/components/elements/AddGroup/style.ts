import styled from "styled-components";

export const InputGroup = styled.input`
    background-color: ${ props => props.theme?.colors.background };
    color:${props => props.theme.colors.secondary};
    border:none;
    font-size: 16px;
    width: 60%;
    outline: none;
    padding: 8px;
    border-radius: 5px;
    &::placeholder{
        color:${props => props.theme.colors.secondary};
    }
`
export const IconAdd = styled.img`
    cursor: pointer;
    margin: 0px 10px;
`
export const ButtonAdd = styled.button`
    background: ${props => props.theme.colors.secondary};
    width: 50px;
    height: 50px;
    color: ${props => props.theme.colors.primary};
    font-size: 30px;
    font-weight: 700;
    border: none;
    outline: none;
    border-radius: 50px;
    cursor: pointer;
`
export const ContainerAdd = styled.div`
    padding: 20px;
    border-top: 1px solid ${props => props.theme.colors.terciary};
`