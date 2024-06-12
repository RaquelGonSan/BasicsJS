let nombre = 'Pepe';
let anime = 'Demon slayer';
let edad = 16;

let personaje = {
    nombre: "Pepe",
    anime: 'Demon slayer',
     edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['edad']);


personaje.edad = 21;


delete personaje.anime;
console.log(personaje);