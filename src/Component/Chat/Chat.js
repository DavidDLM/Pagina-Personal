import React from "react";
import "./Chat.css";


const Chat = () => {

    return (
        <div class="wrapperChat">
            <div class="mensajes-area" id="mensajes-area"></div>
            <div class="footerChat">
                <div class="escribir-area">
                    <textarea class="caja-typing" placeholder="Enviar mensaje" id="caja-typing" maxlength="140"></textarea>
                    <button class="boton-enviar" id="boton-enviar" >Enviar</button>
                </div>
            </div>
        </div>

    );
};

export default Chat;






