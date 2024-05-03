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



const edad = 30;


const persona = {
  nombre: 'Juan',
  edad: 30
};

persona.edad = 31; // Esto está bien

persona = {}; // Esto generará un error



let contador = 0;

let nombre = 'Juan';
nombre = 'María'; // Cambiando el valor de la variable

let edad;
edad = 30; // Asignando un valor después de la declaración




var contador = 0;


var nombre = 'Juan';
nombre = 'María'; // Cambiando el valor de la variable

var edad;
edad = 30; // Asignando un valor después de la declaración

function ejemplo() {
  var x = 10;
  if (true) {
      var x = 20; // La variable x se sobrescribe
      console.log(x); // Imprimirá 20
  }
  console.log(x); // Imprimirá 20
}



// Función tradicional
function suma(a, b) {
  return a + b;
}

// Función flecha
const suma = (a, b) => a + b;


// Función tradicional
const persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};


// Con función flecha
const persona = {
  nombre: 'Juan',
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // Imprimirá "Hola, soy undefined"



// Función tradicional
const persona = {
  nombre: 'Juan',
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};


// Con función flecha
const persona = {
  nombre: 'Juan',
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
  }
};

persona.saludar(); // Imprimirá "Hola, soy undefined"

// Función tradicional
function esPar(num) {
  return num % 2 === 0;
}

// Función flecha
const esPar = num => num % 2 === 0;


// Función tradicional
function duplicar(num) {
  return num * 2;
}

// Función flecha
const duplicar = num => num * 2;


// Función constructora tradicional
function Persona(nombre) {
  this.nombre = nombre;
}

const juan = new Persona('Juan'); // Funciona bien

// Función flecha
const PersonaFlecha = (nombre) => {
  this.nombre = nombre;
}

const pedro = new PersonaFlecha('Pedro'); // Esto lanzará un error