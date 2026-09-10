

//callback: funcion que se envia como argumento a los parametros de otra funcion.
console.warn('Funcion Callback');
const myNumbers: number[] = [1, 2, 3, 4, 5];

//en este caso usamos el forEach para recorrer los elementos de mi arreglo y ejecuta una funcion 
// para cada elemento uno a uno y le enviamos la funcion anonima como callback.
myNumbers.forEach((value) => {
    console.log( value );
});

//Otro ejemplo de funcion
console.warn('Funcion sin resumir');
myNumbers.forEach((value, index, arr) => {
    console.log( value, index, arr );
});

console.warn('Funcion resumida');
//Forma corta de hacer la misma funcion de arriba, cuando tenemos un parametro que su unica funcion es ser
//enviado a otra funcion ahi dentro, podemos enviar solo la funcion y el resultado sera igual.
myNumbers.forEach( console.log );

