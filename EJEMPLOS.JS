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

for (variable in objeto) {
  // Bloque de código a ejecutar
}

const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

for (let propiedad in persona) {
  console.log(propiedad + ': ' + persona[propiedad]);
}

for (let elemento of iterable) {
  // Bloque de código a ejecutar por cada elemento
}



const colores = ['rojo', 'verde', 'azul'];

for (let color of colores) {
  console.log(color);
}