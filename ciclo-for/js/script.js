// for (let i = 1900; i <= new Date().getFullYear(); i++) {
//   document.getElementById("ano").innerHTML +=
//     "<option value=' " + i + "'>" + i + "</option";
// }

const carros = ["Camaro", "Mustang", "Onix", "Hilux"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
  document.getElementById("teste").innerHTML += carros[i] + " ";
}
