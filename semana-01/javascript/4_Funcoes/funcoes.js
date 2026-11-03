// O JS já fornece algumas funções prontas, podemos criar as nossas também

// Função built-in: console.log()

console.log("Função muito utilizada");

// Função built-in: prompt()
// Recebe um input do usuário do sistema e pode guardar este valor;

let idade = prompt("Qual a sua idade");

console.log(idade);

// Função built-in: alert()
// Exibe uma mensagem na tela do usuário

alert("Veja está mensagem");

// Função built-in: Math.x()
// Função utlizada para expressões/cálculos matemáticos

let maiorNumero = Math.max(12, 89, 21, 45, 1);

console.log(maiorNumero);

let menorNumero = Math.min(1, -6, 21, 6, -2);
console.log(menorNumero);

let arredondar = Math.round(5.23232);

console.log(arredondar);

let arredondadarParaCima = Math.ceil(5.3232132132);

console.log(arredondadarParaCima);

// definindo uma função: function

function imprimirNoConsole() {
  console.log("Olá Mundo");
}

imprimirNoConsole();

function somar(n1, n2) {
  return n1 + n2;
}

let resultado = somar(10, 9);

console.log(resultado);

function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

// escopo de uma função
// o que acontece dentro de uma função fica separado do escopo global
// o escopo global seria todo o arquivo do javaScript

let n = 10;

const numero = function () {
  let n = 25;
  console.log(n);
};

console.log(n);

// Arrow Functions: Uma outra forma de escrever funções
// bastante utilizada em frameworks modernos
// porém não deve substituir as functions por completo(veremos mais tarde os detalhes)

const parOuImpar = (n) => {
  if (n % 2 == 0) {
    return "Par";
  }
  return "Impar";
};

console.log(parOuImpar(4));

let somarDoisNumeros = (x, y) => {
  return x + y;
};

console.log(somarDoisNumeros(8, 9));

// se só tem um parametro, podemos remover  os parênteses

const dobrarNumero = (n) => n * 2;

console.log(dobrarNumero(45));

const raizQuadrada = (n) => Math.sqrt(n);

console.log(raizQuadrada(81));

//

const somarTresNumeros = (a, b, c) => {
  if (a == undefined || b == undefined || c == undefined) {
    return "Precisa informar três valores";
  }

  return a + b + c;
};

console.log(somarTresNumeros(4, 2));

console.log(somarTresNumeros(4, 2, 6));

// argumentos com valor default

//podemos pre-determinar um valor para um argumento, se o usuário nõa informar, ele já vai ter um valor setado

const repetirFrase = (frase, n = 2) => {
  for (let i = 0; i < n; i++) {
    console.log(frase);
  }
};

repetirFrase("Bom dia");

repetirFrase("Boa tarde", 3);

function lembrarSoma(x) {
  return function (y) {
    return x + y;
  };
}

let soma1 = lembrarSoma(2);

console.log(soma1(5));
