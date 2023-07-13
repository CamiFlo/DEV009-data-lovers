import { searchByGender, mergeCharacters, searchByDirector, sortByYearAsc, sortByYearDesc, sortByNameAsc, sortByNameDesc, percentageGender } from './data.js';

import data from './data/ghibli/ghibli.js';

const allFilms = data.films;

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
    posterContainer.appendChild(information);
    containerFilm.appendChild(titulo);
    section.appendChild(containerFilm);
    //LISTENER DE CADA BOTÓN
    posterContainer.addEventListener('click',function(){
      view1.style.display='none';
      view2.style.display='block';
      showAllFilm(data[i]);
    });
  }
}
//Función que muestra el arreglo de personajes recibido
function displayCharacters(data, section){
  section.innerHTML = '';
  for (let i=0; i<data.length; i++){
    const characterCard=document.createElement('div');
    characterCard.className='character-card';
    const characterPhoto=document.createElement('div');
    characterPhoto.className='character-photo';
    const character=document.createElement('img');
    character.src=data[i].img;
    const characterInfo=document.createElement('p');
    characterInfo.innerText=data[i].name+'\nAge: '+data[i].age+'\nGender: '+data[i].gender;
    characterPhoto.appendChild(character);
    characterCard.appendChild(characterPhoto);
    characterCard.appendChild(characterInfo);
    section.appendChild(characterCard);
  }
}
//Función que muestra las locaciones o vehículos
function displayItems(data, section){
  for (let i=0; i<data.length; i++){
    section.innerHTML = '';
    const locationCard=document.createElement('div');
    locationCard.className='location-card';
    const locationPhoto=document.createElement('figure');
    locationPhoto.className='location-photo';
    const location=document.createElement('img');
    location.src=data[i].img;
    const nameLocation=document.createElement('p');
    nameLocation.innerHTML=data[i].name;
    locationPhoto.appendChild(location);
    locationCard.appendChild(locationPhoto);
    locationCard.appendChild(nameLocation);
    section.appendChild(locationCard);
  }
}

//Header
const header = document.createElement('header');
const imgHeader1 = document.createElement('img');
imgHeader1.src = 'https://indy-systems.imgix.net/tsa14o3kh1lt3ts7b8vwz6m3atbk?max-w=1000';

const menu = document.createElement('nav');
const menuOption = document.createElement('ul');
menu.className = 'menu-bar';
const menuOptionHome = document.createElement('li');
menuOptionHome.innerText = 'HOME';
const menuOptionFilms = document.createElement('li');
menuOptionFilms.innerText = 'FILMS';
const menuOptionCharacters = document.createElement('li');
menuOptionCharacters.innerText = 'CHARACTERS';

//menuOption.appendChild(menuOptionHome);
menuOption.appendChild(menuOptionFilms);
menuOption.appendChild(menuOptionCharacters);
menu.appendChild(menuOption);
header.appendChild(imgHeader1);
header.appendChild(menu);
root.appendChild(header);

//Listeners de opciones de menú
menuOptionFilms.addEventListener('click', function() {
  view1.style.display='block';
  view2.style.display='none';
  view3.style.display='none';
});
menuOptionCharacters.addEventListener('click', function() {
  view1.style.display='none';
  view2.style.display='none';
  view3.style.display='block';
});
//creación de vistas
const view1 = document.createElement('section');
const view2 = document.createElement('section');
const view3 = document.createElement('section');
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
//Sección de filtros
const filterSection = document.createElement('nav');
filterSection.className = 'filter-bar';
view1.appendChild(filterSection);

const optionDirector = document.createElement('select');
const optionsDirectors = document.createElement('option');
optionsDirectors.innerText = 'Show by Director';
optionDirector.appendChild(optionsDirectors);
//Obtiene los nombres de todos los directores
const filmDirectors = [];
for (let i = 0; i < allFilms.length; i++) {
  //En mi arreglo filmDirectors incluye el directior de la película [indice]
  if (!filmDirectors.includes(allFilms[i].director)) {
    filmDirectors.push(allFilms[i].director);
  }
}
for (let i = 0; i < filmDirectors.length; i++) {
  const optionsDirectors = document.createElement('option');
  //optionsDirectors.id = i;
  optionsDirectors.innerText = filmDirectors[i];
  optionDirector.appendChild(optionsDirectors);
}
const optionSort = document.createElement('select');
const optionsSort = document.createElement('option');
optionsSort.innerText = 'Sort films by release date';
optionSort.appendChild(optionsSort);

const optionSort1 = document.createElement('option');
optionSort1.innerText = 'Ascendant';
const optionSort2 = document.createElement('option');
optionSort2.innerText = 'Descendant';
optionSort.appendChild(optionSort1);
optionSort.appendChild(optionSort2);

filterSection.appendChild(optionDirector);
filterSection.appendChild(optionSort);

optionDirector.addEventListener('change', evento => {
  const option = evento.target.options.selectedIndex;
  if (option === 0) {
    displayFilms(allFilms);
  }
  else {
    const filtro = searchByDirector(allFilms, filmDirectors[option - 1]);
    displayFilms(filtro);
  }
});
optionSort.addEventListener('change', evento => {
  const option = evento.target.options.selectedIndex;
  switch(option) {
  case 0:
    displayFilms(allFilms); 
    break;
  case 1:
    displayFilms(sortByYearAsc(allFilms)); 
    break;
  case 2:
    displayFilms(sortByYearDesc(allFilms)); 
    break;
  }
});
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
  const button1=document.createElement('button');
  button1.id = 'button-back';
  button1.innerText='Back to films';
  const cardFilm = document.createElement('section');
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
  allInformation.appendChild(titleFilm);
  allInformation.appendChild(year);
  allInformation.appendChild(infoDirector);
  allInformation.appendChild(infoProducer);
  allInformation.appendChild(infoScore);
  allInformation.appendChild(infoDescription);
  cardFilm.appendChild(poster);
  cardFilm.appendChild(allInformation);
  view2.appendChild(button1);
  view2.appendChild(cardFilm);
  
  
  //Seccion que muestra los personajes de la película
  const subTitle1=document.createElement('h2');
  subTitle1.innerText='Characters';
  const showCharacters=document.createElement('div');
  showCharacters.className='show-characters';
  displayCharacters(film.people,showCharacters);

  view2.appendChild(subTitle1);
  view2.appendChild(showCharacters);
  //Sección que muestra las locaciones de la película solo si hay datos
  if(film.locations.length>0){
    const subTitle2=document.createElement('h2');
    subTitle2.innerText='Locations';
    const showLocations=document.createElement('div');
    showLocations.className='show-locations'; 
    displayItems(film.locations,showLocations);
    view2.appendChild(subTitle2);
    view2.appendChild(showLocations);
  }
  //Sección que muestra los vehículos de la película solo si hay datos
  if(film.vehicles.length>0){
    const subTitle3=document.createElement('h2');
    subTitle3.innerText='Vehicles';
    const showVehicles=document.createElement('div');
    showVehicles.className='show-vehicles';
    displayItems(film.vehicles,showVehicles);
    view2.appendChild(subTitle3);
    view2.appendChild(showVehicles);
  }

  button1.addEventListener('click',function(){
    view1.style.display='block';
    view2.style.display='none';
    view3.style.display='none';
    displayFilms(allFilms);
  });
}
//FINALIZA VISTA 2

//INICIA VISTA 3
const titleCharacters=document.createElement('h1');
titleCharacters.innerText='Characters';
const showCharacters=document.createElement('div');
showCharacters.className='show-characters';
const percentageByGender = document.createElement('p');
percentageByGender.id = 'percentageGender';
const allCharacters = mergeCharacters(allFilms);
//Sección de filtros
const filterSectionCharacter = document.createElement('nav');
filterSectionCharacter.className = 'filter-bar';

const optionGender = document.createElement('select');
const optionsGender = document.createElement('option');
optionsGender.innerText = 'Show by Gender';
optionGender.appendChild(optionsGender);
//Localiza todos los generos existentes en los personajes
const genders = [];
for (let i = 0; i < allCharacters.length; i++) {
  if (!genders.includes(allCharacters[i].gender)) {
    genders.push(allCharacters[i].gender);
  }
}
for (let i = 0; i < genders.length; i++) {
  const optionsGender = document.createElement('option');
  optionsGender.innerText = genders[i];
  optionGender.appendChild(optionsGender);
}
filterSectionCharacter.appendChild(optionGender);

const optionSortCharacters = document.createElement('select');
const optionsSortCharacters1 = document.createElement('option');
optionsSortCharacters1.innerText = 'Sort by Name';
const optionsSortCharacters2 = document.createElement('option');
optionsSortCharacters2.innerText = 'A - Z';
const optionsSortCharacters3 = document.createElement('option');
optionsSortCharacters3.innerText = 'Z - A';
optionSortCharacters.appendChild(optionsSortCharacters1);
optionSortCharacters.appendChild(optionsSortCharacters2);
optionSortCharacters.appendChild(optionsSortCharacters3);

filterSectionCharacter.appendChild(optionSortCharacters);

optionGender.addEventListener('change', evento => {
  const option = evento.target.options.selectedIndex;
  if (option === 0) {
    percentageByGender.innerText = '';
    displayCharacters(allCharacters, showCharacters);
  }
  else {
    percentageByGender.innerText = 'The percentage of '+ genders[option - 1] + ' characters is '+ percentageGender(allCharacters, genders[option - 1]) + '%';
    const filter = searchByGender(allCharacters, genders[option - 1]);
    displayCharacters(filter, showCharacters);
  }
});
optionSortCharacters.addEventListener('change', evento => {
  const option = evento.target.options.selectedIndex;
  switch(option) {
  case 0:
    displayCharacters(allCharacters, showCharacters); break;
  case 1:
    displayCharacters(sortByNameAsc(allCharacters), showCharacters);  break;
  case 2:
    displayCharacters(sortByNameDesc(allCharacters), showCharacters);  break;
  }
});
view3.appendChild(titleCharacters);
view3.appendChild(filterSectionCharacter);
view3.appendChild(percentageByGender);
displayCharacters(allCharacters, showCharacters);
view3.appendChild(showCharacters);
//FINALIZA VISTA 3

//Footer
const footer = document.createElement('footer');
footer.innerText = 'Creado por Brenda Aguilar y Cami Flores';
root.appendChild(footer);