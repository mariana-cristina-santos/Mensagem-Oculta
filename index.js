/* botão muda de codificar pra decodificar e vice e versa*/

var btns = document.querySelectorAll('input[name="botoes"]');

btns.forEach((radio) => {
    radio.addEventListener("change", function (evento) {
        evento.preventDefault();

        var botao = document.querySelector("button");

        if (evento.target.value == "decodificar") {
            botao.innerHTML = "Decodificar Mensagem !!! ";
        } else {
            botao.innerHTML = "Codificar Mensagem !!!";
        }
    });
});

/* Qunado "cifra de césar" está selecionado aparece em baixo o campo que pede o numeroIncremento da cifra */

var escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
    evento.preventDefault();

    var chave = document.getElementById("numero");

    if (evento.target.value == "caesar") {
        chave.style = "display: block";
    } else {
        chave.style = "display: none";
    }
});


var formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var texto = formulario.texto.value;
    var escolhas = formulario.escolhas.value;
    var numeroIncremento = formulario.numeroIncremento.value;
    var botoesRadiais = formulario.botoes.value;
    var mensagemFinal = "";

    if (escolhas == "caesar") {
        mensagemFinal = caesar(botoesRadiais, texto, numeroIncremento);
    } else {
        mensagemFinal = base64(botoesRadiais, texto);
    }

    var resultadoTexto = document.getElementById("mensagemFinal");
    resultadoTexto.innerHTML = `${mensagemFinal}`;

    formulario.texto.focus();
});

/*cifra de cesar*/

function caesar(botoes, texto, numeroIncremento) {
    numeroIncremento = Number(numeroIncremento);

    var mensagemFinal = "";

    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var codigo = letra.charCodeAt();

        if (botoes == "codificar") {
            codigo += numeroIncremento;
        } else {
            codigo -= numeroIncremento;
        }

        mensagemFinal += String.fromCharCode(codigo);
    }

    return mensagemFinal;
}
/*base64*/

function base64(botoes, texto) {
    if (botoes == "codificar") {
        return btoa(texto);
    } else {
        return atob(texto);
    }
}