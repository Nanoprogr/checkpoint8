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



Copy code
class CuentaBancaria {
  #saldo = 0;

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  retirar(cantidad) {
    if (cantidad <= this.#saldo) {
      this.#saldo -= cantidad;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}

const miCuenta = new CuentaBancaria();
miCuenta.depositar(100);
miCuenta.retirar(50);
console.log(miCuenta.obtenerSaldo()); // Imprimirá 50





class Personaje {
  constructor(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacar(objetivo) {
    console.log(`${this.nombre} ataca a ${objetivo.nombre}!`);
    objetivo.recibirAtaque(this.ataque);
  }

  recibirAtaque(daño) {
    this.vida -= daño;
    console.log(`${this.nombre} recibe ${daño} puntos de daño.`);
  }
}

class Guerrero extends Personaje {
  constructor(nombre) {
    super(nombre, 100, 10);
  }

  // Método específico del Guerrero
  usarEspada() {
    console.log(`${this.nombre} usa su espada para atacar!`);
  }
}

const jugador1 = new Guerrero("Aragorn");
const jugador2 = new Personaje("Goblin", 50, 5);

jugador1.usarEspada(); // Aragorn usa su espada para atacar!
jugador1.atacar(jugador2); // Aragorn ataca a Goblin!



const miPromesa = new Promise((resolve, reject) => {
  // Simulando una operación asincrónica (por ejemplo, una solicitud HTTP)
  setTimeout(() => {
    const exito = true; // Simular si la operación fue exitosa o no
    if (exito) {
      resolve("¡Operación completada con éxito!");
    } else {
      reject("¡Algo salió mal!");
    }
  }, 2000); // Simular un retraso de 2 segundos
});





miPromesa
  .then((resultado) => {
    console.log(resultado); // Imprimirá "¡Operación completada con éxito!"
  })
  .catch((error) => {
    console.error(error); // Imprimirá "¡Algo salió mal!"
  });




  function operacionAsincronica() {
    return new Promise((resolve, reject) => {
      // Simulando una operación asincrónica
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
  }
  
  operacionAsincronica()
    .then((resultado) => {
      console.log(resultado); // 1
      return resultado * 2;
    })
    .then((resultado) => {
      console.log(resultado); // 2
      return resultado * 3;
    })
    .then((resultado) => {
      console.log(resultado); // 6
    });



    const promesa1 = Promise.resolve(1);
const promesa2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promesa3 = Promise.reject("Error");

Promise.all([promesa1, promesa2])
  .then((resultados) => {
    console.log(resultados); // [1, 2]
  })
  .catch((error) => {
    console.error(error); // No se ejecutará en este caso
  });

Promise.all([promesa1, promesa3])
  .then((resultados) => {
    console.log(resultados); // No se ejecutará en este caso
  })
  .catch((error) => {
    console.error(error); // Error
  });



  const promesa1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));

Promise.race([promesa1, promesa2])
  .then((resultado) => {
    console.log(resultado); // 2 (la promesa2 se resuelve primero)
  })
  .catch((error) => {
    console.error(error); // No se ejecutará en este caso
  });


  async function miFuncionAsincronica() {
    const resultado1 = await promesa1;
    const resultado2 = await promesa2;
    return resultado1 + resultado2;
  }
  
  miFuncionAsincronica()
    .then((resultado) => {
      console.log(resultado); // La suma de resultado1 y resultado2
    })
    .catch((error) => {
      console.error(error);
    });



