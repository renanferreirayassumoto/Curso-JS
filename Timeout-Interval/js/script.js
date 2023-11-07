// function ativarContagem() {
//   document.getElementById("tempo").innerHTML = "Começou a contagem";
//   tempo = setTimeout(function () {
//     document.getElementById("tempo").innerHTML = "Executou o setTimeout!";
//   }, 5000); // ativa a função apenas uma vez quando der o tempo especificado
// }

// function pararContagem() {
//   clearTimeout(tempo);
//   document.getElementById("tempo").innerHTML = "Parou a Contagem!";
// }

////////////////////////////////////////////////////////////
// Cronometro Progressivo

function ativarContagem() {
  tempo = setInterval(function () {
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.getElementById("tempo").innerHTML = soma;
  }, 1000);
}

function ativarContagemNegativa() {
  tempo = setInterval(function () {
    var cronometro = document.getElementById("tempo").innerHTML;
    var decrescimo = parseInt(cronometro) - 1;
    document.getElementById("tempo").innerHTML = decrescimo;
  }, 1000);
}

function pararContagem() {
  clearInterval(tempo);
  document.getElementById("tempo").innerHTML = 0;
}
