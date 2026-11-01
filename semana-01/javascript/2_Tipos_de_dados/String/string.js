//String = texto

console.log(typeof "Isso é uma String");

console.log(typeof "Esse texto também é uma String");

console.log(typeof `Esse também é uma String`);

console.log("Oi meu nome é Andrius");

console.log("Oi eu gosto de rock");

console.log(`Estou aprendendo JavaScript`);

//A / pula a linha na String

console.log(
  "A banda Oasis, depois de anos, fora dos palcos, decidiu retornar, e promete fazer história com essa volta.\nCom shows marcado em mais de 3 continentes, os fãs já começam a se preparar para viver essa noite, esperado por muitos",
);

//Para inserir uma 'ou " devemos iniciar a string com a aspa inversa

console.log("Até a mafia tem ´ética´");

console.log('"O impossível é só questão de opinião"');

//variaveis numa String precisamos usar os templates literal ` `

var name = "Andrius";

console.log(`Seja vem vindo ${name}`);

console.log("Seja vem vindo ${name}"); // não dá certo

//concatenação é o processo se somar "Strings"

console.log("Salada " + "de" + " fruta");
