while (condición) {
    // bloque de código a ejecutar mientras la condición sea verdadera
}

let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

do {
    // Cuerpo del bucle
  } while (condición);

let numero;
do {
numero = prompt("Ingrese un número mayor que 10:");
} while (numero <= 10);

console.log("¡Número válido ingresado!");

for (inicialización; condición; actualización) {
  // Bloque de código a repetir
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}