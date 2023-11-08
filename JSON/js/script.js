// //OBJETO CARRO
// const carro = {
//   marca: "Fiat",
//   modelo: "Uno",
//   ano: 2001,
//   motor: ["1.6", "1.4", "1.0"],
// };

// //CONVERTEU PARA TEXTO JSON
// var texto = JSON.stringify(carro);

// //COLOCOU O TEXTO NO HTML
// document.getElementById("area").innerHTML = texto;

// // CONVERTEU TEXTO PARA OBJETO
// let objeto = JSON.parse(texto);

// //PEGAMOS UM VALOR DESSE OBJETO
// console.log(objeto.motor[1]);

function buscarCep() {
  let input = document.getElementById("cep").value;

  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/");
  ajax.send();

  ajax.onload = function () {
    let obj = JSON.parse(this.responseText);
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;
    document.getElementById("texto").innerHTML =
      "Logradouro: " +
      logradouro +
      "<br>" +
      "Cidade: " +
      cidade +
      "<br>" +
      "Estado: " +
      estado;
  };
}
