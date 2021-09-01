/* Qunado "cifra de césar" está selecionado aparece em baixo o campo que pede o incremento da cifra */

var selecionar = document.querySelector("select");

selecionar.addEventListener("change", function (evento) {
    evento.preventDefault();

    var chave = document.getElementById("numero");

    if (evento.target.value == "caesar") {
        chave.style = "display: block";
    } else {
        chave.style = "display: none";
    }
});

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

//*** */
var formulario = document.forms.formulario;

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var mensagem = formulario.mensagem.value;
    var selecionar = formulario.selecionar.value;
    var incremento = formulario.incremento.value;
    var radios = formulario.botoes.value;
    var resultado = '';

    if(selecionar == 'caesar'){
        resultado = caesar(radios, mensagem, incremento);
    }

    else{
        resultado = base64(radios, mensagem);
    }

    var resultadoMensagem = document.getElementById('resultado');
    resultadoMensagem.innerHTML = `<p>A mensagem codificada é:</p> ${resultado}`;

    

    formulario.mensagem.focus();
});

function base64(botoes, mensagem){
    if(botoes == 'codificar'){
        return btoa(mensagem);
    }

    else{
        return atob(mensagem);
    }
}

function caesar(botoes, mensagem, incremento){
    incremento = Number(incremento);

    var resultado = '';

    for(var i = 0; i < mensagem.length; i++) {
        var letra = mensagem[i];
        var codigo = letra.charCodeAt();

        if (botoes == 'codificar') {
            codigo += incremento;
        }

        else{
            codigo -= incremento;
        }

        resultado += String.fromCharCode(codigo);
    }

    return resultado;
}


