
const ironman = { //Si usamos F2 para cambiar el nombre del objeto, se cambia el nombre de donde lo hayamos usado
    firstName: 'Tony',
    lastName: 'Stark',
    age: 33,
    address: {
        postalCode: 10021,
        city: 'New York',
    }
}


const spiderman =  {...ironman}; //Esto rompe la referencia por lo que se 'Esparce' 
                                //ironman el objeto en spiderman, basicamente se crea una copia
                                //con las propiedades de ironman (valor y referencia)


spiderman.firstName = 'Peter'; //podemos cambiar las properties del objeto literal mas no reasignar la constante person
spiderman.lastName = 'Parker';
spiderman.age = 23;
spiderman.address.city = 'San Jose';

//La mejor forma de crear un "Clon" es usando la funcion structuredClone

const spiderman2 =  structuredClone(ironman);

console.log( ironman, spiderman, spiderman2 );

