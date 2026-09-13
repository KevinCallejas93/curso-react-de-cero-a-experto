import { heroes, type Hero } from '../data/heroes.data';
// import { heroes as superHeroes } from '../data/heroes.data'; //Es para renombar la variable que importa


const getHeroById = (id: number): Hero | undefined => { //Aqui controlamos el undefined ( Hero | undefined )

    const hero = heroes.find((hero) => {
      return hero.id === id;
    });

    //Se puede controlar el retorno de esta forma tambien
    // if (!hero)
    //     throw new Error(`Hero with id: ${ id } not found`);
        
    return hero;

};

console.log( getHeroById( 1 ) );