import {searchByGender, mergeCharacters, searchByDirector, sortByYearAsc, sortByYearDesc, sortByNameAsc, sortByNameDesc, percentageGender} from '../src/data.js';

const films = [ 
  {"title": "Ponyo on the Cliff by the Sea","director": "Hayao Miyazaki","release_date": "2008",
    "people": [
      {"name": "Sosuke","gender": "Male","specie": "Human"},
      {"name": "Brunhilde/Ponyo","gender": "Female","specie": "Fish/Human"},
      {"name": "Granmammare","gender": "Female","specie": "Deity"},
    ]
  },
  {"title": "Only Yesterday",
    "director": "Isao Takahata",
    "release_date": "1991",
    "people": [
      {"name": "Aiko","gender": "Female","specie": "Human"}
    ]
  },
  {"title": "Pom Poko","director": "Isao Takahata","release_date": "1994",
    "people": [
      {"name": "Shoukichi","gender": "Male", "specie": "Raccoon Dog"},
      { "name": "Okiyo", "gender": "Female", "specie": "Raccoon Dog"},
      {"name": "Zeniba","gender": "Female","specie": "Witch"}
    ]
  }
];

const allCharacters = [
  {"name": "Sosuke", "gender": "Male","specie": "Human"},
  {"name": "Brunhilde/Ponyo","gender": "Female","specie": "Fish/Human"},
  {"name": "Granmammare","gender": "Female","specie": "Deity"},
  {"name": "Aiko", "gender": "Female", "specie": "Human"},
  {"name": "Shoukichi", "gender": "Male","specie": "Raccoon Dog"},
  {"name": "Okiyo","gender": "Female", "specie": "Raccoon Dog"},
  {"name": "Zeniba","gender": "Female","specie": "Witch"}
];

describe('searchByGender', () => {
  it('es una funcion', () => {
    expect(typeof searchByGender).toBe('function');
  });
  it('debería devolver arreglo con personajes femeninos', () => {
    expect(searchByGender(allCharacters,'Female')).toEqual([
      {"name": "Brunhilde/Ponyo","gender": "Female","specie": "Fish/Human"},
      {"name": "Granmammare","gender": "Female","specie": "Deity"},
      {"name": "Aiko","gender": "Female","specie": "Human"},
      {"name": "Okiyo","gender": "Female","specie": "Raccoon Dog"},
      {"name": "Zeniba","gender": "Female","specie": "Witch"}
    ]);
  });
  it('debería devolver arreglo con personajes masculinos', () => {
    expect(searchByGender(allCharacters,'Male')).toEqual([
      {"name": "Sosuke","gender": "Male","specie": "Human"},
      {"name": "Shoukichi","gender": "Male","specie": "Raccoon Dog"}
    ]);
  });
});

describe('mergeCharacters', () => {
  it('es una funcion', () => {
    expect(typeof mergeCharacters).toBe('function');
  });
  it('debería devolver un arreglo con todos los personajes de las peliculas', () => {
    expect(mergeCharacters(films)).toEqual(allCharacters);
  });
});

describe('searchByDirector', () => {
  it('es una funcion', ()=> {
    expect(typeof searchByDirector).toBe('function');
  });
  it('debería devolver un arreglo con el filme del director Hayao Miyazaki', () => {
    expect(searchByDirector(films,'Hayao Miyazaki')).toEqual([ 
      {"title": "Ponyo on the Cliff by the Sea","director": "Hayao Miyazaki","release_date": "2008",
        "people": [
          {"name": "Sosuke","gender": "Male","specie": "Human"},
          {"name": "Brunhilde/Ponyo","gender": "Female", "specie": "Fish/Human"},
          {"name": "Granmammare","gender": "Female","specie": "Deity"},
        ]
      }
    ]);
  });
  it('debería devolver un arreglo con los filmes del director Isao Takahata', () => {
    expect(searchByDirector(films,'Isao Takahata')).toEqual([
      {"title": "Only Yesterday","director": "Isao Takahata","release_date": "1991",
        "people": [
          {"name": "Aiko","gender": "Female","specie": "Human"}
        ]
      },
      {"title": "Pom Poko","director": "Isao Takahata","release_date": "1994",
        "people": [
          {"name": "Shoukichi","gender": "Male", "specie": "Raccoon Dog"},
          {"name": "Okiyo","gender": "Female","specie": "Raccoon Dog"},
          {"name": "Zeniba","gender": "Female","specie": "Witch"}
        ]
      }
    ]);
  });
});

describe('sortByYearAsc', () => {
  it('es una funcion', ()=> {
    expect(typeof sortByYearAsc).toBe('function');
  });

  it('debería devolver un arreglo con las películas ordenadas por año de lanzamiento de forma ascendente', () => {
    expect(sortByYearAsc(films)).toEqual([
      {"title": "Only Yesterday","director": "Isao Takahata","release_date": "1991",
        "people": [
          {"name": "Aiko","gender": "Female","specie": "Human"}
        ]
      },
      {"title": "Pom Poko","director": "Isao Takahata","release_date": "1994",
        "people": [
          {"name": "Shoukichi","gender": "Male","specie": "Raccoon Dog"},
          { "name": "Okiyo","gender": "Female","specie": "Raccoon Dog"},
          {"name": "Zeniba","gender": "Female","specie": "Witch"}
        ]
      },
      {"title": "Ponyo on the Cliff by the Sea","director": "Hayao Miyazaki","release_date": "2008",
        "people": [
          {"name": "Sosuke", "gender": "Male","specie": "Human"},
          {"name": "Brunhilde/Ponyo","gender": "Female","specie": "Fish/Human"},
          {"name": "Granmammare","gender": "Female","specie": "Deity"}
        ]
      }
    ]);
  });
});

describe('sortByYearDesc', () => {
  it('es una funcion', ()=> {
    expect(typeof sortByYearDesc).toBe('function');
  });
  it('Devuelve arreglo con las películas ordenadas por año de lanzamiento de forma descendente', () => {
    expect(sortByYearDesc(films)).toEqual([
      {"title": "Ponyo on the Cliff by the Sea","director": "Hayao Miyazaki","release_date": "2008",
        "people": [
          {"name": "Sosuke","gender": "Male","specie": "Human"},
          {"name": "Brunhilde/Ponyo","gender": "Female","specie": "Fish/Human"},
          { "name": "Granmammare","gender": "Female","specie": "Deity"}
        ]
      },
      {"title": "Pom Poko","director": "Isao Takahata","release_date": "1994",
        "people": [
          {"name": "Shoukichi","gender": "Male","specie": "Raccoon Dog"},
          {"name": "Okiyo","gender": "Female","specie": "Raccoon Dog"},
          { "name": "Zeniba","gender": "Female", "specie": "Witch"}
        ]
      },
      {"title": "Only Yesterday","director": "Isao Takahata","release_date": "1991",
        "people": [
          {"name": "Aiko","gender": "Female","specie": "Human"}
        ]
      },
    ]);
  });
});
describe('sortByNameAsc', () => {
  it('es una funcion', ()=> {
    expect(typeof sortByNameAsc).toBe('function');
  });
  it('ordena los personajes por nombre de A hacia Z', ()=>{
    expect(sortByNameAsc(allCharacters)).toEqual([
      {"name": "Aiko","gender": "Female","specie": "Human"},
      {"name": "Brunhilde/Ponyo", "gender": "Female","specie": "Fish/Human"},
      {"name": "Granmammare","gender": "Female","specie": "Deity"},
      {"name": "Okiyo", "gender": "Female","specie": "Raccoon Dog"},
      {"name": "Shoukichi","gender": "Male","specie": "Raccoon Dog" },
      {"name": "Sosuke","gender": "Male","specie": "Human"},
      {"name": "Zeniba","gender": "Female","specie": "Witch"}
    ]);
  });

  it('ordena los personajes por nombre de A hacia Z', ()=>{
    const testNames = [
      {"name": "Zeniba", "gender": "Female","specie": "Witch"},
      {"name": "Okiyo","gender": "Female", "specie": "Raccoon Dog"},
      {"name": "Aiko","gender": "Female","specie": "Human"}
    ];
    expect(sortByNameAsc(testNames)).toEqual([
      {"name": "Aiko","gender": "Female","specie": "Human"},
      {"name": "Okiyo","gender": "Female", "specie": "Raccoon Dog"},
      { "name": "Zeniba","gender": "Female","specie": "Witch"}
    ]);
  });
});

describe('sortByNameDesc', () => {
  it('es una funcion', ()=> {
    expect(typeof sortByNameDesc).toBe('function');
  });
  it('ordena los personajes por nombre de Z hacia A', ()=>{
    expect(sortByNameDesc(allCharacters)).toEqual([
      {"name": "Zeniba","gender": "Female","specie": "Witch"},
      {"name": "Sosuke","gender": "Male","specie": "Human"},
      {"name": "Shoukichi","gender": "Male","specie": "Raccoon Dog"},
      { "name": "Okiyo","gender": "Female","specie": "Raccoon Dog"},
      { "name": "Granmammare", "gender": "Female","specie": "Deity"},
      {"name": "Brunhilde/Ponyo","gender": "Female","specie": "Fish/Human"},
      {"name": "Aiko","gender": "Female","specie": "Human"}
    ]);
  });
  it('ordena los personajes por nombre de Z hacia A', ()=>{
    const testNames = [
      {"name": "Zeniba", "gender": "Female","specie": "Witch"},
      {"name": "Aiko","gender": "Female","specie": "Human"},
      {"name": "Okiyo","gender": "Female", "specie": "Raccoon Dog"}
    ];
    expect(sortByNameDesc(testNames)).toEqual([
      {"name": "Zeniba", "gender": "Female","specie": "Witch"},
      {"name": "Okiyo","gender": "Female", "specie": "Raccoon Dog"},
      {"name": "Aiko","gender": "Female","specie": "Human"}
    ]);
  });
});

describe('percentageGender', () => {
  it('es una funcion', ()=> {
    expect(typeof percentageGender).toBe('function');
  });
  it('Devuelve 28.57% de personajes masculinos respecto del total de personajes', ()=> {
    expect(percentageGender(allCharacters,'Male')).toBe('28.57');
  });
  it('Devuelve 71.43% de de personajes femeninos respecto del total de personajes', ()=> {
    expect(percentageGender(allCharacters,'Female')).toBe('71.43');
  });
});