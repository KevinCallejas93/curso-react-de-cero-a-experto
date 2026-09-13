
console.warn('Funcion de flecha sin simplificar');
//Funcion de flecha sin simplificar
const greet = (name: string): string => {
  return `Hola ${ name }`;
};

const message = greet('Kevin');
console.log( message );



console.warn('Funcion de flecha simplificada');
const greet2 = (name: string): string => `Hola ${ name }`;

const message2 = greet2('Julie');
console.log(message2);



console.warn('Funcion de flecha con varios valores de retorno');
const getUser = () => {

    return{
        uid: 'CDF-120',
        username: 'LolitoFdz',
    }
};

const user = getUser();
console.log(user);



console.warn('Funcion de flecha simplificada con varios valores de retorno');
const getUser2 = () => ({ //notese que quitamos las llaves de la funcion y el return
    uid: 'GHF-234',
    username: 'Kevin_Callejas',
}); //Agregamos parentesis de apertura y cierre para decirle a la funcion que estamos regresando un objeto
   //y no el cuerpo de la funcion

   const user2 = getUser2();
   console.log( user2 );