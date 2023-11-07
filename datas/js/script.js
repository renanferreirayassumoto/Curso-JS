// COMANDO BASE PARA PEGAR A DATA
let data = new Date();
// console.log(data);

// PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
// console.log(ano);

// PEGAR O MES ATUAL - de 0 até 11 (0 - JANEIRO | 11 - DEZEMBRO)
let mes = data.getMonth();
console.log(mes);

// MOSTRAR O MES NO FORMATO ESCRITO
const mesesDoAno = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// PEGAR DIA DO MES - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

// MOSTRAR DIA DA SEMANA - 0 até 6
let diaSemana = data.getDay();
console.log(diaSemana);

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];
let diaSemmanaEscrito = diaDaSemana[data.getDay()];
console.log(diaSemmanaEscrito);

//PEGAR A  HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);

// PEGAR MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

// PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR MS (MILISEGUNDOS) - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString("pt-br", { dateStyle: "short" });
console.log(dataBR);

// PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
  return x < 10 ? "0" + x : "" + x;
}

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

// COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS

var hoje = new Date();
var vencimento = new Date(2023, 12, 15);

if (hoje > vencimento) {
  console.log("Sua conta está vencida!");
} else {
  console.log("Parabéns, suas contas estão em dia!");
}

// DIFERENÇA EM DIAS ENTRE DUAS DATAS
var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 31);
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log("Faltam " + diferencaDias + " dias para o fim do ano!");
