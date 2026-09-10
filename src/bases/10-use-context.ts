console.warn('useContext');

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ key, name, age, rank ='Vengador' }: Hero) => { //enviamos las props (hero) de tipo Hero

    return{
        keyName: key,
        user: {
            name, //Esto se puede hacer cuando tenemos esto user: name (mismo nombre)
            age, //mismo caso
        },
        rank: rank,
    };
};


const {rank, keyName, user } = useContext(person); //Cuando tenemos anidaciones de propiedades 
                                                  //es mejor hacer referencia al "user"
const { name, age } = user; //y aqui desestructuramos el user y el age

console.log({ rank, keyName, name, age });