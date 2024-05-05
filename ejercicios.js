//ejercicio 1
const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (const elemento of miLista){
    console.log(elemento);
}


//ejercicio 2
const miLista = ["velma", "exploradora", "jane", "john", "harry"];

let contador = 0;

while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}

//ejercicio 3
const saludar = () => {
    return "Hola mundo";
};

console.log(saludar());