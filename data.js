//FUNCION QUE FILTRA POR NOMBRE DE DIRECTOR
export const searchByDirector = (allFilms,director) => {
  const filterList = allFilms.filter(film => film.director === director);
  return filterList;
};
//FUNCION QUE ORDENA LAS PELICULAS POR AÑO DE LANZAMIENTO ASCENDENTEMENTE
export const sortByYearAsc = (allFilms) => {
  return allFilms.sort(function(a, b){ 
    if (a.release_date > b.release_date) {
      return 1; 
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
  });
};
//FUNCION QUE ORDENA LAS PELICULAS POR AÑO DE LANZAMIENTO DESCENDENTEMENTE
export const sortByYearDesc = (allFilms) => {
  const sortedList = allFilms.sort(function(a, b){ 
    if (a.release_date < b.release_date) {
      return 1; 
    }
    if (a.release_date > b.release_date) {
      return -1;
    }
  });
  return sortedList;
};
// FUNCION QUE UNE TODOS LOS PERSONAJES EN UNA SOLA LISTA
export const mergeCharacters =(allFilms) => {
  const allCharacters=[];
  for(let i=0; i<allFilms.length; i++){
    const characters=allFilms[i].people;
    for (let j=0; j<characters.length; j++){
      allCharacters.push(characters[j]);
    }
  }
  return allCharacters;
};
//FUNCIÓN QUE FILTRA LOS PERSONAJES POR GENERO
export const searchByGender = (allCharacters,gender) => {
  const filterList = allCharacters.filter(character => character.gender === gender);
  return filterList;
};
export const sortByNameAsc = (allCharacters) => {
  const sortedList = allCharacters.sort(function(a, b){ 
    if (a.name > b.name) {
      return 1; 
    }
    if (a.name < b.name) {
      return -1;
    }
  });
  return sortedList;
};
export const sortByNameDesc = (allCharacters) => {
  const sortList = allCharacters.sort(function(a, b){ 
    if (a.name < b.name) {
      return 1; 
    }
    if (a.name > b.name) {
      return -1;
    }
    //return 0;
  });
  return sortList;
};
export const percentageGender = (allCharacters, busqueda) => {
  const filtro = allCharacters.filter(character => character.gender === busqueda );
  return ((filtro.length*100) / allCharacters.length).toFixed(2);
};