import React from "react";
import { ContainerPage, TitlePage } from "../../components/main";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Email() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail (){
        if (name==='' || email==='' || message===''){
            alert('Preencha os campos');
            return;
        }

        const templateParams = {
            from_name:name,
            message:message,
            email:email
        }

        emailjs.send("service_9y3lpbp","template_qy09926",templateParams,"7Wm3Vni8gk3yrbJAy")
    }

    return (
        <>
            <ContainerPage>
                <TitlePage>
                    <h1>ENVIO DE E-MAIL</h1>
                </TitlePage>
                <form className="form" onSubmit={sendEmail}>
                    <input className="input" type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
                    <input className="input" type="text" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <input className="input" type="text" placeholder="Digite sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message}/>
                    <input className="button" type="submit" value="Enviar"/>
                </form>
            </ContainerPage>
        </>
    )
}