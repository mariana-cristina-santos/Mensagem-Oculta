/* Qunado "cifra de césar" está selecionado aparece em baixo o campo que pede o incremento da cifra */

var selecionar = document.querySelector("select");

selecionar.addEventListener("change", function (evento) {
    evento.preventDefault();

    var chave = document.getElementById("incremento");

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
