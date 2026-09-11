
export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// uso del type
export type Owner = 'DC' | 'Marvel'; //El type se crea para cuando tenemos objetos especificos
                             //En este caso 2 especifico DC y Marvel, es una simple regla que ponemos

                             
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC',
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC',
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC',
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
    },
    {
        id: 6,
        name: 'Green Lantern',
        owner: 'DC',
    },
];

