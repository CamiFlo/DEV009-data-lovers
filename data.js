//FUNCION QUE FILTRA POR NOMBRE DE DIRECTOR
export const searchByDirector = (allFilms,director) => {
  return allFilms.filter(film => film.director === director);
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
    return 0;
  });
};
//FUNCION QUE ORDENA LAS PELICULAS POR AÑO DE LANZAMIENTO DESCENDENTEMENTE
export const sortByYearDesc = (allFilms) => {
  let sortedList = allFilms.sort(function(a, b){ 
    if (a.release_date < b.release_date) {
      return 1; 
    }
    if (a.release_date > b.release_date) {
      return -1;
    }
    return 0;
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
}
export const anotherExample = () => {
  return 'OMG';
};
// probando probando