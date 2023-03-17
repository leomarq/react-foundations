// css principal aplicado ao site inteiro
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    corFundo: 'honeydew',
    corTexto: 'maroon',
    tituloH1: 'maroon'
}

export const darkTheme = {
    corFundo: '#2A0A0A',
    corTexto: 'honeydew',
    tituloH1: 'honeydew'
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color: ${props => props.theme.corFundo};
    }
`

export const ContainerPage = styled.div `
    padding: 1% 2%;
    color: ${props => props.theme.corTexto};
`

export const TitlePage = styled.h1 `
    color: ${props => props.theme.corTexto};
    font-size: 20px;
`