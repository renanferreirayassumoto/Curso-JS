// function verificaCor() {
//   let cor = document.getElementById("cor").value;
//   cor = cor.toLowerCase();

//   switch (cor) {
//     case "azul":
//       document.body.style.backgroundColor = "blue";
//       break;
//     case "vermelho":
//       document.body.style.backgroundColor = "red";
//       break;
//     case "amarelo":
//       document.body.style.backgroundColor = "yellow";
//       break;
//     default:
//       document.getElementById("teste").innerHTML =
//         "Nenhuma cor disponível para " + cor + "!";
//   }
// }

function diaDaSemana() {
  var dia = new Date().getDay();
  console.log(dia);

  switch (dia) {
    case 0:
      document.getElementById("teste").innerHTML = "É Domingo!";
      break;
    case 1:
      document.getElementById("teste").innerHTML = "É Segunda!";
      break;
    case 2:
      document.getElementById("teste").innerHTML = "É Terça!";
      break;
    case 3:
      document.getElementById("teste").innerHTML = "É Quarta!";
      break;
    case 4:
      document.getElementById("teste").innerHTML = "É Quinta!";
      break;
    case 5:
      document.getElementById("teste").innerHTML = "É Sexta!";
      break;
    case 6:
      document.getElementById("teste").innerHTML = "É Sábado!";
      break;
    default:
      document.getElementById("teste").innerHTML = "Não é um dia da semana";
  }
}
