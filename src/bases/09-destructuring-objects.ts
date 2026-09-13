
//forma tradicional
console.warn('Forma Tradicional (Lineas innecesarias)');
const person = {
    name:'Kevin',
    age: 45,
    key: 'Persona Normal',
}

const name = person.name; 
const age = person.age; 
const key = person.key; 

console.log({ name, age, key });



console.warn('Forma Tradicional, optimizado');
const person2 = {
    name:'Julie',
    age: 29,
    key: 'Persona Natural',
}

const {name: name2, age: age2, key: key2} = person2; //se escriben de esta forma las propiedades porque ya hay 
                                                    //propiedades arriba llamadas name, age, key

console.log({name2, age2, key2});



console.warn('Con interface');
interface Persona{
    name: string;
    age: number;
    key: string;
    rank?: string; //Notese el ? que nos indica que es opcional esta propiedad
}


const person3: Persona = {
    name: 'Ana Maria',
    age: 52,
    key: 'Madre',
    rank: 'Capellan',
}

const {name: name3, age: age3, key: key3, rank: rank} = person3;

console.log( {name3, age3, key3, rank} );











