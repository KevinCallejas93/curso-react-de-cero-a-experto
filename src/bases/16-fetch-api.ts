import type { GiphyRandomResponse } from "../data/giphy.response";




const API_KEY = 'MdlaOVR97QQMOzaRNgZCQcHUL1WGG1H9';


const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

//Aqui insertamos el gif
const createImageInsideDom = ( url: string ) => {
    
    const imgElement = document.createElement('img');
    
    imgElement.src = url;

    document.body.append( imgElement );

};


myRequest //El objetvo de la request es solo traer la data mediante promises
    .then((response) => response.json() 
    .then(({ data }: GiphyRandomResponse) => {

        const imageUrl = data.images.original.url;

        createImageInsideDom(imageUrl);
    }))
    .catch((err) => {
        console.log( err );
    });

    
//Esta forma funciona pero es codigo tedioso
// myRequest
//     .then( (response) => {

//         response.json().then((data) => {
//           console.log(data);
//         })

//     }).catch((err) => {
//         console.error(err);
//     });
