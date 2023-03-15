import React from "react";
import apiCEP from "../../services/apiCEP";
import { useState } from "react";

export default function Cep() {
    return(
    <>
        <h1>Pesquisar CEP</h1>
        <h3>Digite seu CEP: <input type="text" placeholder="CEP"/> </h3>
    </>
    )
}