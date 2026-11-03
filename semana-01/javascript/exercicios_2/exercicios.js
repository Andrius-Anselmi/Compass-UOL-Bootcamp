// crie uma estrutura if que verifica a entrada na balada, se tiver mais de 18 anos pode entrar;

let idade = 12;

if (idade > 18) {
  console.log("Pode entrar");
} else {
  console.log("Não pode entrar");
}

// crie uma constante com o seu nome como valor
// depois uma estrutura if que verifica se o seu nome é o que está na constante

const nome = "Andrius";

if (nome == "Andrius") {
  console.log("Seja bem vindo");
}

// a função Math.pow exibe a potência de um número
// teste a função

console.log(Math.pow(2, 4));

// armazene a velocidade de um carro em uma variável, com o número que desejar
// faça uma estrutura if/else para verificar se ele está acima da velocidade
// 80 é a velocidade permitida

let velocidade = 120;

if (velocidade > 80) {
  console.log("Você está acima da velocidade permitida");
} else {
  console.log("Você está abaixo da velocidade permitida");
}

// faça uma estrutura if/else para verificar se um usuário pode dirigir
// se a idade for maior que 18, mas ele não possuir CNH, exiba uma mensagem
// se a idae for maior que 18, e tem CNH exiba uma mensagem
// se não tiver 18, nem CNH, exiba outra mensagem

let minhaIdade = 20;
let tenhoCNH = false;

if (minhaIdade < 18 || tenhoCNH == false) {
  console.log("Você não pode dirigir");
} else if (minhaIdade > 18 && tenhoCNH == true) {
  console.log("Você pode dirigir");
}

// escreva um loop while qqie exibe números de 0 a 10 no console

let numero = 0;
while (numero <= 10) {
  console.log(numero);
  numero++;
}

// escreva um loop for que exibe números de 100 a 50 no console

for (let i = 100; i <= 50; i--) {
  console.log(i);
}

// escreva um programa que exiba qual número é par e qual é impar
// o contador deve iniciar em 0 e ir até 50

for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é impar`);
  }
}
