
interface Person { //La interface solo es un molde de como queremos que luzca algo, 
                  //es decir obligamos a usar el tipo de dato que aqui definimos y usamos UpperCamelCase

    firstName: string; //Se puede terminar con , pero es mas comun usar ;
    lastName: string;
    age: number;

    //Es muy raro ver la interface de esta forma es mejor crear otra interface para el address
    // address?: { //con el ? dejamos que sea opcional agregar el address en los objetos
    //     postalCode: string;
    //     city: string;
    // } 
    address: Address; //Podemos hacer referencia a nuestra propia interface
};

interface Address { //Esta composicion de interfaces es de lo mas comun, haciendo referencia arriba a la propia Address
    postalCode: string;
    city: string;
} 


const ironman: Person = { //Aqui utilizamos la interfaz
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: { //nos da error porque no la hemos definido en nuestra inteface
        postalCode: '10021', //si no es string nos da error
        city: 'New York',
    },
};

//podemos crear otro objeto y presionar ctrl + . para rellenar las propiedades porque arriba ya las definimos
//en la interface y ts ya las rellena por nosotros
const spiderman: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 22,
    address: {
        postalCode: 'ABC-10021',
        city: 'Los Angeles',
    }
}

console.log( ironman, spiderman );