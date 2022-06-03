let cont = document.getElementById("caja-typing");
let btn = document.getElementById("boton-enviar");
cont.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (e.key === 'Enter') {
        sendMessage();
    }
})

function sendMessage() {
    const d = new Date();
    usuario = "Mario";
    var mensaje = document.getElementById("caja-typing").value;
    document.getElementById("caja-typing").value = "";
    var html = '<div class="caja-mensajes mi-caja-mensajes">' +
        '<div class="mensaje mensaje-mio">' + mensaje + '</div>' +
        '<div class="separator"></div>' + '</div>';

    sendRequest(usuario, mensaje, d);
    document.getElementById("mensajes-area").innerHTML += html;
    document.getElementById("caja-typing").value = "";
}

function getMessage(user, chat) {
    if (validarURLIMG(chat)) {
        var html = '<div class="caja-mensajes otros-caja-mensajes">' +
            '<div class="mensaje mensaje-otros">' + user + ' : '
            + '<img src="' + chat + '" alt="imagen" width="300" height="200">' + '</div>' +
            '<div class="separator"></div>' + '</div>';

        document.getElementById("mensajes-area").innerHTML += html;

    } else if (validarURL(chat)) {
        var html = '<div class="caja-mensajes otros-caja-mensajes">' +
            '<div class="mensaje mensaje-otros">' + user + ' : ' + '<a href="' +
            chat + '" target="_blank">' + chat + '</a>' + '</div>' + '<div class="separator"></div>' + '</div>';

        document.getElementById("mensajes-area").innerHTML += html;
    } else {
        var html = '<div class="caja-mensajes otros-caja-mensajes">' +
            '<div class="mensaje mensaje-otros">' + user + ' : ' + chat + '</div>' +
            '<div class="separator"></div>' + '</div>';

        document.getElementById("mensajes-area").innerHTML += html;
    }

}

const url_base = "http://stw-uvg-22.site:3001/chats";

async function getChats() {
    const response = await fetch(url_base);
    const data = await response.json();
    var registros = data.map(function (registro) {
        if (registro.user === undefined || registro.user === null || registro.user === "") {
            registro.user = "Invitado";
            getMessage(registro.user, registro.chat);
        } else {
            getMessage(registro.user, registro.chat);
        }
        return;
    })

}
getChats();

function sendRequest(usuario, chat, fecha) {
    const data = { "user": usuario, "chat": chat, "date": fecha };

    fetch("http://stw-uvg-22.site:3001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        console.log("Mensaje recibido")
    })
}
function validarURL(str) {
    const patron = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$");
    return patron.test(str);
}
function validarURLIMG(str) {
    const patron = new RegExp("(https?:\/\/.*\.(?:png|jpg))");
    return patron.test(str);
}
function refresh() {
    document.getElementById("mensajes-area").textContent = document.getElementById("mensajes-area").defaulValue;

    getChats();
}
setInterval("refresh()", 1000);





