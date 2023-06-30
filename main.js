import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(example, data);
const allFilms = data.films;
const root = document.getElementById('root');

const header = document.createElement('header');
const imgHeader1 = document.createElement('img');
//imgHeader1.src = 'https://static.wikia.nocookie.net/studioghibli/images/d/d4/Studio_Ghibli.png/revision/latest/scale-to-width-down/439?cb=20200410033324&path-prefix=es';
//imgHeader1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Studio_Ghibli_wordmark.svg/1280px-Studio_Ghibli_wordmark.svg.png';
imgHeader1.src = 'https://upload.wikimedia.org/wikipedia/commons/8/86/Studio_Ghibli_portal_logo.png';
root.appendChild(header);
header.appendChild(imgHeader1);


const titlePage = document.createElement('h1');
titlePage.innerText = 'Films';
root.appendChild(titlePage);
//Se muestran todas las películas dentro de un contenedor
//Vamos a imprimir todas las películas y poster
const section = document.createElement('div');
section.className= 'films-section';
root.appendChild(section);

for(let i=0; i < allFilms.length ; i++){
    //declaramos la seccion, poster y nombre
    const containerFilm = document.createElement('div');
    containerFilm.className = 'film-name';
    const posterContainer = document.createElement('div');
    posterContainer.className = 'poster-container';
    const poster = document.createElement('img');
    poster.src = allFilms[i].poster; 
    //poster.alt = allFilms[i].title;
    poster.className = 'poster-class';
    const titulo = document.createElement('p');
    titulo.innerText = allFilms[i].title;
    section.appendChild(containerFilm);
    containerFilm.appendChild(posterContainer);
    posterContainer.appendChild(poster);
    containerFilm.appendChild(titulo);
}

const footer = document.createElement('footer');
footer.innerText = 'Creado por Brenda Aguilar y Cami Flores';
root.appendChild(footer);
