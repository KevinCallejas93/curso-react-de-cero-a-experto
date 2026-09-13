
console.warn('Array 1');
const myArray = [1, 2, 3, '4', 5, 6]; //Esto puede o no ser un error, aunque ts infiere que puede aceptar strings | number mi arreglo
                                     // esto puede ser un problema

myArray.push(10);
myArray.push('10');

console.log(myArray);

for (const myNumber of myArray) {
    console.log( myNumber + 10); //Esto salta un error porque no podemos sumar 10 a un string
}

// resultado en consola del error (11, 12, 13, 410...etc) aunque ts lo hace pero podemos ver el error

//Para arreglarlo le decimos a ts que es un arreglo de numeros de esta forma controlamos muchos errores.

console.warn('Array 2');

const myArray2: number[] = [1, 2, 3, 4, 5, 6];

for (const myNumber2 of myArray2) {
    console.log( myNumber2 + 10);
}

//mencionar que el push tambien nos dara error si no insertamos el tipo correcto de dato 
// por ejemplo myArray2.push('10'); siendo un string en un arreglo number

console.warn('Array 3');

const myArray3: number[] = [1, 2, 3, 4, 5, 6];

//tambien podemos usar el spread de la misma forma que en los objetos literales pero usando [] en vez de {}

const myArray4 = [...myArray2];

//ahora si hacemos un push ya no afectara a myArray2
myArray4.push(7);

console.log( myArray2 ); //en consola [1, 2, 3, 4, 5, 6]
console.log( myArray4 ); //en consola [1, 2, 3, 4, 5, 6, 7]

//Este sufre del mismo problema si tenemos un objeto en nuestro arreglo, el spread solo afecta al primer nivel del array
// y no a los siguientes niveles del objeto dentro del array por eso se recomienda para clonar objetos
//usar el structuredClone.