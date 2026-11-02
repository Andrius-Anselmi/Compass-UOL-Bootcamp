// estrutura de repetição é um comando para repetir algo por uma determinada condição

// while: enquanto a condição não for atingida, fará uma ação

let numero = 0;

while (numero < 10) {
  console.log(`numero: ${numero}`);
  numero++;
}

// for é semelhante ao while, porém mais organizado e compacto

for (let i = 0; i < 10; i++) {
  console.log(`numero: ${i}`);
}

// do while: ele executa uma primeira vez, e depois verifica

let x = -1;

do {
  console.log(x);
  x++;
} while (x > 5);

// break, força uma saída do loop

for (let i = 0; i < 10; i++) {
  console.log(i * 2);
  if (i == 4) {
    console.log("chamando o break");
    break;
  }
}

// temos o continue, que pula a instrução

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    if (i == 2) {
      continue;
    }
    console.log(i);
  }
}

// quando há necessidades de vários if, podemos usar o switch/case

switch (valor) {
  case "Andrius":
    console.log("O seu nome é Andrius");

  case "Arthur":
    console.log("O seu nome é Arthur");

  case "Ricardo":
    console.log("O seu nome é Ricardo");

  default:
    console.log("O seu nome não está aqui");
    break;
}
