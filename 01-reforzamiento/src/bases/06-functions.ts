
//notese la forma en la que enviamos los argumentos a los parametros de la funcion de tipo String para que no de error
function greet(name: string) {
    return `Hola ${ name }`;
} 
//function greet(name: string): string, esto es lo que infiere ts de la funcion, 
//debemos evitar que ts infiera el tipo de dato o de retorno de la funcion

//Para que ts no infiera el tipo de retorno de dato lo hacemos asi
function greet2(name: string): string { //notese aqui el : string que agregamos
    return `Hola ${ name }`;
} 

const message = greet('Kevin');
const message2 = greet2('Julie');

console.log( message );
console.log( message2 );

const greet3 = (name: string): string => { //Funcion de flecha
    return `Hola ${ name }`
};

const message3 = greet3('Ana Maria');

console.log( message3 );


function getUser(){
    return{
        uid: 'ABC-123',
        username: 'El_Papi23',
    };
}

const user = getUser();

console.log( user );

const getUser2 = () => {

    return{
        uid: 'CDF-120',
        username: 'LolitoFdz',
    }
};

const user2 = getUser2();

console.log(user2);