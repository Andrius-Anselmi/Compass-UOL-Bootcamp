// escreva uma função que imprime "Hello World!" no console

mensagem = () => "Hello World";

console.log(mensagem());

// escreva uma função que peça a sua idade, e diga vc tem X anos

qualSuaIdade = (idade) => `voçê tem ${idade} anos`;

console.log(qualSuaIdade(23));

// escreva uma função que some dois números e retorne eles;

function soma(a, b) {
  return a + b;
}

console.log(soma(10, 30));

// escreva uma função que retorne um número aleatório

retornarNumeroAleatorio = (x) => Math.random() * x + 1;

console.log(retornarNumeroAleatorio(10));

// Escreva uma função que deteceta o tipo de dado passado
// verifique se é um number, boolean ou string

function verificarTipo(dado) {
  if (typeof dado == "number") {
    return "É um number";
  } else if (typeof dado == "string") {
    return "É uma string";
  } else if (typeof dado == "boolean") {
    return "É um boolean";
  }
}

console.log(verificarTipo(true));

// escreva uma função que receba um número negativo e retorne um número positivo

retornarPositivo = (numero) => Math.abs(numero);

console.log(retornarPositivo(-5));

// escreva uma função que recebe uma string
// se o texto conter mais de 10 caracteres imprima "Texto muito longo";
// se conter menos, imprima "Texto dentro do limite"

function verificarTexto(texto) {
  if (texto.length > 10) {
    return "Texto muito longo";
  } else {
    return "Texto dentro do limite";
  }
}

console.log(verificarTexto("grêmio"));

// escreva uma função que decrementa de 1 de 1 com um loop, além disso imprima somente os números pares no console

function decrementar(numero) {
  for (let i = numero; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

console.log(decrementar(20));
