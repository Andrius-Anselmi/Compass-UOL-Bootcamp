// O javaScript em diferentes operações converte silenciosamente o tipo de resultado final da operação

console.log(5 * null); // 0

console.log("5" - 3); // 2
console.log(typeof "5" - 3);

console.log(typeof ("5" + 1)); // 51
console.log("5" + 1);

console.log("45" * 2);
console.log(typeof ("45" * 2));

console.log("dois" * "tres"); // NaN
