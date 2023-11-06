const pessoa = ["Renan", "Ferreira", 30, "Aluno"]; //array
const lista2 = ["Arroz", "Feijão", "Leite", "Macarrão"]; // array 2
const lista3= ["Sushi", "Hamburguer"]; // array 3
const jogadores = ["Biro Biro", "Ribamar", "Neymar", "Messi", "Jorginho", "Fabinho"];
const numeros = [40, 100, 1 , 5 ,25 ,10];
// pessoa.pop(); // remove o último
// pessoa.shift(); // remove o primeiro
// pessoa.push("último item"); // adociona em ultimo
// pessoa.unshift("Primeiro") // adiciona em primeiro
// delete pessoa[0] // remove mas deixa como 'undefined'
// pessoa.splice(1,0,"Item adicionado 1", "Item adicionado 2"); // 1° posição, endereço exato
                                                             // da matriz onde sera colocado
                                                             // o elemento, 2° posição quantos
                                                             // itens depois dessa posição
                                                             // serão deletados, 3° posição
                                                             // os itens a serem adicionados.

// const superLista = pessoa.concat(lista2,lista3); // concatena 2 listas

// const craques = jogadores.slice(2,4); // fatiar um array , (ponto inicial, ponto final)

// const jogOrdem = jogadores.sort(); // ordem alfabética

// const jogDesordem = jogadores.sort();
// jogadores.reverse(); // ordem desalfabetica

const numerosOrdem = numeros.sort(function(a,b){return a-b}); // orderna em ordem crescente
// const numerosOrdem = numeros.sort(function(a,b){return b-a}); // ordena em ordem descrescente

function maiorNumero(array){
    return Math.max.apply(null, array);
} // funcão pega o maior número

function menorNumero(array){
    return Math.min.apply(null, array);
}// função pega o menor numero

const maior20 = numeros.filter(filtragem); // filtrar usando a funcao filtragem

function filtragem(value, index, array){
    return value > 20; // filtra valores maiores que 20
}

// document.getElementById("teste").innerHTML = pessoa.join(" - "); // "join" muda a forma como
                                                                 // o array é representado

document.getElementById("teste").innerHTML = maior20; 