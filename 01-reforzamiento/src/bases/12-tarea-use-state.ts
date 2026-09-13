
/* Requisitos
La función debe llamarse useState.
Debe retornar un arreglo con dos elementos:
#1 - Un string (el valor inicial).
#2 - Una función anónima de flecha que:
Recibe un string.
Imprime ese string en consola. 

USO ESPERADO
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta" */


function useState( value: string ) {
    return[
        value, 
        (name: string) => {
            console.log( name );
        },
    ] as const;
}

const [ name, setName ]= useState('Goku');

console.log( name );
setName('Vegeta');

