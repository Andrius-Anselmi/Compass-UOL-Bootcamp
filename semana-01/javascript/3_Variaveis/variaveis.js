let nome = "Andrius";

console.log(nome);

console.log(`O meu nome é ${nome}`);

let laranjas = 5;

console.log(laranjas * laranjas);

laranjas = "Laranja";

console.log(laranjas);

// Em js podemos mudar uma variavel de Number para String, ou vice-versa por exemplo

nome = 21;

console.log(nome);

// Podemos declara várias variaveis em uma só linha (não recomendado)

let um = 1,
  dois = 2,
  tres = 3;

console.log(um + dois + tres);

// podemos declarar variaveis usando var e const

// o var é a forma antiga, não usamos mais, por conta do escopo

// const é igual o const em outras linguagem, logo não pode ser alterado

var comida = "Pizza";

const cpf = "032.142.590-16";

console.log(cpf);

cpf = "e"; // ele não faz nada

console.log(cpf);

// convenção de nomes de variaveis

// Não começar com um número
// Mas pode terminar com número
// Poder ter $ ou _, mas não outros caracteres especiais
// Mas não pode ter pontuação ou outros especiais
// Podemos iniciar com letras maiusculas
// Ou usar camelCase (let meuPrimeiroNome)
