

//Desestructuracion de arreglos
console.warn('1er Ejemplo');
const characterNames: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , ,p3 ] = characterNames; //Si queremos la posicion 3 del arreglo, se puede hacer asi
                                 // aunque no suele ser comun hacer esto.

console.log({ p3 });


console.warn('2do Ejemplo');
//Esto solo se puede hacer en TS
const returnsArrayFn = () => {
    return ['ABC', 123] as const; //ASUMIMOS que siempre la primer posicion sera string y la segunda number
                                 //usamos as const
}                               //el as const le dice a TS que siempre en las posicion 1 va ser String y en 2 number

const [letters, numbers ] = returnsArrayFn();

console.log( letters, numbers );
console.log(letters + 100); //ahora podemos hacer esto (Concatenar)
console.log(numbers + 100); //ahora podemos hacer esto (suma)








