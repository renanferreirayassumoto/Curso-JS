function verificar() {
  let nome = document.getElementById("nome").value;
  if (nome == "" || nome == null) {
    let p = document.getElementById("teste");
    p.innerHTML = "O campo nome não pode estar vazio!";
    p.style.color = "red";
  } else {
    let p = document.getElementById("teste");
    p.innerHTML = "Seja bem vindo " + nome + "!";
    p.style.color = "green";
  }
}
