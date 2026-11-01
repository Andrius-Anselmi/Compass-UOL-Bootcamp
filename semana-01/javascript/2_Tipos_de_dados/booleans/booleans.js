// Booleans os unicos valores possíveis são True(Verdadeiro) ou False(Falso)s

console.log(5 > 2); // true

console.log(4 * 2 == 10); // false

// Comparações

// Maior que: >
// Menor que: <
// Maior ou igual: >=
// Menor ou igual: <=
// igual: ==
// diferente: !=
// idêntico: ===  verifica o valor e mesmo tipo da variavel

console.log(4 >= 4); // true
console.log(3 <= 3); // true
console.log(6 == 6); // true
console.log(2 != 9); // true
console.log("3" == 3); // true
console.log(3 === "3"); // false
console.log(3 === 3); // true

// Operadores lógicos
// &&: and
// ||: or
// !: not

console.log(4 > 2 && 6 < 4); // false
console.log(2 > 1 && 7 > 0); // true

console.log(4 > 2 || 6 < 4); // true
console.log(2 < 1 || 1 > 4); // false

console.log(!(4 < 2)); // true
console.log(!(5 > 1)); // false

// Operador ternário

console.log("operador ternario");

console.log(5 > 2 ? "Sim" : "Não");
