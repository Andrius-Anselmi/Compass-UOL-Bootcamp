numero = 21;

let i = 2;
let primo = true;

if (numero <= 1) {
  primo = false;
} else {
  while (i <= Math.sqrt(numero)) {
    if (numero % i == 0) {
      primo = false;
      break;
    }
    i++;
  }
}

console.log(primo);
