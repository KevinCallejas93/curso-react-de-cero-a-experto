

const myPromise = new Promise<number>(( resolve, reject ) => { //<number> significa que la promesa resuelve un numero
  
    setTimeout(() => {
        // resolve(100);
        reject('Mi amigo desaparecio con mi dinero');
    }, 2000);
});

myPromise
    .then(
        myMoney =>{ //resolve
            console.log(`Tengo mi dinero ${ myMoney }`); //definiendo arriba con <number> dejamos de tener unknown en myMoney
        }
    ).catch( //reject
        (reason) => {console.log(reason);    
    }).finally(() => { //Este siempre se ejecuta sin importar si la promesa fue un exito o fallo y es opcional
      console.log('Pues a seguir con mi vida');
    });