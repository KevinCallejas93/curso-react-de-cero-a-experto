import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'MdlaOVR97QQMOzaRNgZCQcHUL1WGG1H9';



//Aqui insertamos el gif
const createImageInsideDom = ( url: string ) => {
    
    const imgElement = document.createElement('img');
    
    imgElement.src = url;
    
    document.body.append( imgElement );
    
};


const getRandomGifUrl = async (): Promise < string > => {
    
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    //De ambas formas se puede llegar a ver, aun de esta forma solo se aconseja si el tipo de dato de
    //lo que resuelve la promesa (.json) es any, si ya tiene un tipo no se aconseja hacerlo asi
    // const data: GiphyRandomResponse = (await response.json()); 
    
    
    const { data } = (await response.json()) as GiphyRandomResponse;

    return data.images.original.url;
}


getRandomGifUrl().then(
    createImageInsideDom //aqui optimizamos de (url) => createImageInsideDom( url );
);