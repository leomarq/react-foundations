import React from "react";
import apiCEP from "../../services/apiCEP";
import { useState } from "react";

export default function Cep() {
    const [inputCepDigitado,setinputCepDigitado] = useState('');
    const [cep,setCep] = useState('');

    async function pesquisarCep() {
        const responseCep = await apiCEP.get(`${inputCepDigitado}/json`)
        setCep(responseCep.data);
        alert(responseCep.data);
    }

    return(
    <>
        <h1>Pesquisar CEP</h1>
        <h3>Digite seu CEP: <input type="text" placeholder="CEP" value={inputCepDigitado} /> </h3>
    </>
    )
}