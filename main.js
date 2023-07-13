import { mergeCharacters, searchByDirector, sortByYearAsc, sortByYearDesc } from './data.js';

import data from './data/ghibli/ghibli.js';

const allFilms = data.films;
const characters = allFilms[0].people;

const root = document.getElementById('root');
//************* FUNCIONES ************//
//Función que muestra todas las películas del parámetro data
function displayFilms(data){
    section.innerHTML= '';
    for(let i=0; i < data.length ; i++){
        //declaramos la seccion, poster y nombre
        const containerFilm = document.createElement('div');
        containerFilm.className = 'film-name';
        const posterContainer = document.createElement('div');
        posterContainer.className = 'poster-container';
        const poster = document.createElement('img');
        poster.src = data[i].poster; 
        //PRUEBA
        const information = document.createElement('div');
        information.innerText = data[i].release_date + '\n\nVer más';
        information.className = 'text-container';
        //Prueba
        poster.alt = allFilms[i].title;
        poster.className = 'poster-class';
        const titulo = document.createElement('p');
        titulo.innerText = data[i].title;
        containerFilm.appendChild(posterContainer);
        posterContainer.appendChild(poster);
        //
        posterContainer.appendChild(information);
        //
        containerFilm.appendChild(titulo);
        section.appendChild(containerFilm);
        //LISTENER DE CADA BOTÓN
        posterContainer.addEventListener('click',function(event){
            view1.style.display='none';
            view2.style.display='block';
            showAllFilm(data[i]);
        });
    }
}

//función que muestra todos los caracteres
/*function displayCharacters(data.people){
    section.innerHTML= '';
    for(let i=0; i < data.people.length ; i++){
        //declaramos la seccion,foto e información de cada personaje

        const showAllCharacters=document.createElement('div');
        showAllCharacters.className='show-characters';
        const characterPhoto = document.createElement('figure');
        characterPhoto.className='character-photo';
        const infoCharacters=document.createElement('span');
        infoCharacters.className='information'
        const characterImg=document.createElement('img');
        characterImg.src=data[i].img;
        
        people.src = data[i].people; 
        infoCharacters.innerHTML= data.people;
    
        showAllCharacters.appendChild(titulo);
        section.appendChild(showAllCharacters);

        //LISTENER EN EL FILTRO?
        //posterContainer.addEventListener('click',function(event){
            view1.style.display='none';
            view2.style.display='none';
            view3.style.display='block';
            showAllFilm(data[i]);
        };
    }

// fin funcion caracteres*/

//Header
const header = document.createElement('header');
const imgHeader1 = document.createElement('img');
imgHeader1.src = 'https://indy-systems.imgix.net/tsa14o3kh1lt3ts7b8vwz6m3atbk?max-w=1000';
header.appendChild(imgHeader1);
root.appendChild(header);

//creación de vistas
const view1 = document.createElement('div');
const view2=document.createElement('div');
const view3=document.createElement('div');
//const view3=document.createElement('div');
root.appendChild(view1);
root.appendChild(view2);
root.appendChild(view3);

view1.style.display='block';
view2.style.display='none';
view3.style.display='none';
//al clickear una pelicula, muestra su tarjeta con toda la información en la segunda vista

// INICIA VISTA 1
const titlePage = document.createElement('h1');
titlePage.innerText = 'Films';
view1.appendChild(titlePage);
//Se muestran todas las películas dentro de un contenedor
//Vamos a imprimir todas las películas y poster
const section = document.createElement('div');
section.className= 'films-section';
view1.appendChild(section);
displayFilms(allFilms); // Llamamos a la función displayFilms y envia como parametro toda la data a mostrar
//FINALIZA VISTA 1

//INICIA VISTA 2
function showAllFilm(film){
    view2.innerHTML= '';
    const boton1=document.createElement('button');
    boton1.innerText='Volver';
    const cardFilm = document.createElement('div');
    cardFilm.className= 'card-film';
    const poster = document.createElement('img');
    poster.src = film.poster;
    const allInformation=document.createElement('section');
    const titleFilm = document.createElement('h1');
    titleFilm.innerText = film.title;
    const year = document.createElement('h2');
    year.innerText = film.release_date;
    //const infoFilm =document.createElement('p');
    //infoFilm.innerText ='Director: '+allFilms[0].director+'\nProducer: '+allFilms[0].producer+'\nScore: '+allFilms[0].rt_score+'\n\n'+allFilms[0].description;
    const infoDirector =document.createElement('p');
    infoDirector.innerHTML =`<b>Director: </b>${film.director}`;
    const infoProducer=document.createElement('p');
    infoProducer.innerHTML= `<b>Producer: </b>${film.producer}`;
    const infoScore=document.createElement('p');
    infoScore.innerHTML= `<b>Score:  </b>${film.rt_score}`;
    const infoDescription=document.createElement('p');
    infoDescription.innerText=film.description;

    const subTitle1=document.createElement('h2');
    subTitle1.innerText='Characters';
    const showCharacters=document.createElement('div');
    showCharacters.className='show-characters';
    const allCharacters=film.people;
    for (let i=0; i<allCharacters.length; i++){
        const characterCard=document.createElement('div');
        characterCard.className='character-card';
        const characterPhoto=document.createElement('div');
        characterPhoto.className='character-photo';
        const character=document.createElement('img');
        character.src=allCharacters[i].img;
        const characterInfo=document.createElement('p');
        characterInfo.innerText=allCharacters[i].name+'\nAge: '+allCharacters[i].age+'\nGender: '+allCharacters[i].gender;
        showCharacters.appendChild(characterCard);
        characterCard.appendChild(characterPhoto)
        characterCard.appendChild(characterInfo);
        characterPhoto.appendChild(character);
    }
    const subTitle2=document.createElement('h2');
    subTitle2.innerText='Locations';
    const showLocations=document.createElement('div');
    showLocations.className='show-locations';
    
    const allLocations=film.locations;
    for(let i=0; i<allLocations.length; i++){
        const locationCard=document.createElement('div');
        locationCard.className='location-card';
        const locationPhoto=document.createElement('div');
        locationPhoto.className='location-photo';
        const location=document.createElement('img');
        location.src=allLocations[i].img;
        const nameLocation=document.createElement('p');
        nameLocation.innerHTML=allLocations[i].name;
        showLocations.appendChild(locationCard);
        locationCard.appendChild(locationPhoto);
        locationPhoto.appendChild(location);
        locationCard.appendChild(nameLocation);
    }
    const subTitle3=document.createElement('h2');
    subTitle3.innerText='Vehicles';
    const showVehicles=document.createElement('div');
    showVehicles.className='show-vehicles';
    const allVehicles=film.vehicles;
    for (let i=0; i<allVehicles.length; i++){
        const vehicleCard=document.createElement('div');
        vehicleCard.className='vehicle-card';
        const vehiclePhoto=document.createElement('div');
        vehiclePhoto.className='vehicle-photo';
        const vehicle=document.createElement('img');
        vehicle.src=allVehicles[i].img;
        const nameVehicle=document.createElement('p');
        nameVehicle.innerHTML=allVehicles[i].name;
        showVehicles.appendChild(vehicleCard);
        vehicleCard.appendChild(vehiclePhoto);
        vehiclePhoto.appendChild(vehicle);
        vehicleCard.appendChild(nameVehicle);
    }
    view2.appendChild(boton1);
    view2.appendChild(cardFilm);
    cardFilm.appendChild(poster);
    cardFilm.appendChild(allInformation);
    allInformation.appendChild(titleFilm);
    allInformation.appendChild(year);
    allInformation.appendChild(infoDirector);
    allInformation.appendChild(infoProducer);
    allInformation.appendChild(infoScore);
    allInformation.appendChild(infoDescription);
    view2.appendChild(subTitle1);
    view2.appendChild(showCharacters);
    view2.appendChild(subTitle2);
    view2.appendChild(showLocations);
    view2.appendChild(subTitle3);
    view2.appendChild(showVehicles);

    boton1.addEventListener('click',function(){
        view1.style.display='block';
        view2.style.display='none';
        view3.style.display='none';
        displayFilms(allFilms);
    });
}
//FINALIZA VISTA 2

//INICIA VISTA 3
//function showAllCharacters(allCharacters){
    //view3.innerHTML= '';
    //const boton1=document.createElement('button');
    //boton1.innerText='Volver';
    console.log(mergeCharacters(allFilms));
    const subTitle1=document.createElement('h2');
    subTitle1.innerText='Characters';
    const showCharacters=document.createElement('div');
    showCharacters.className='show-characters';
for(let j=0; j<allFilms.length; j++){


    const allCharacters=allFilms[j].people;
    for (let i=0; i<allCharacters.length; i++){
        const characterCard=document.createElement('div');
        characterCard.className='character-card';
        const characterPhoto=document.createElement('div');
        characterPhoto.className='character-photo';
        const character=document.createElement('img');
        character.src=allCharacters[i].img;
        const characterInfo=document.createElement('p');
        characterInfo.innerText=allCharacters[i].name+'\nAge: '+allCharacters[i].age+'\nGender: '+allCharacters[i].gender;
        characterPhoto.appendChild(character);
        characterCard.appendChild(characterPhoto);
        characterCard.appendChild(characterInfo);
        showCharacters.appendChild(characterCard);
    }
}
    root.appendChild(showCharacters);

    
    console.log('allCharacters');
   /*view3.appendChild(boton1);
    view3.appendChild(cardFilm);
    view3.appendChild(subTitle1);
    view3.appendChild(showCharacters);*/

   /* boton1.addEventListener('click',function(){
        view1.style.display='block';
        view2.style.display='none';
        view3.style.display='none';
        displayFilms(allFilms);
    });*/

//FINALIZA VISTA 3

//Footer
const footer = document.createElement('footer');
footer.innerText = 'Creado por Brenda Aguilar y Cami Flores';
root.appendChild(footer);