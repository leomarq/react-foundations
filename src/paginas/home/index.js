import React from "react";
import Imagem from "../../images/Hacker1.jpg"
import { ContainerPage, TitlePage } from "../../components/main";

export default function Home() {
    return (
        <ContainerPage>
            <TitlePage>Home</TitlePage>
            <p>Bem vindo! :D</p>
            <img src={Imagem} alt="hackerman"/>
        </ContainerPage>
    )
}