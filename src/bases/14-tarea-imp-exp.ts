import { heroes, type Hero, type Owner } from '../data/heroes.data';



export const getHeroesByOwner = (owner: Owner ): Hero[] => {

    const filteredHeroes = heroes.filter((hero) => {
      return hero.owner === owner;
    });

    return filteredHeroes;
};


//Forma optimizada pero menos lejible

// export const getHeroesByOwner = (owner: Owner): Hero[] => {
    
//     const filteredHeroes = heroes.filter( hero => hero.owner === owner );

//     return filteredHeroes;
// };


