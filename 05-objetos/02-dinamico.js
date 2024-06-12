const user = { 
    id: 1
};

//aun que sea una  Constante, podemos añadir propiedades si estamos trabajando con Objetos
user.name = 'Raquel';
user.guardar = function(){
    console.log('guardando', user.name);
}


user.guardar();

delete user.nombre;
delete user.guardar;
console.log(user);

//no se puede modificar un objeto, ni sus propiedades ni sus valores
Object.freeze();

const user1 = Object.freeze({ id:1 });
user1.name = 'Raquel';  // no lo añade
user1.id = 2;           // no lo cambia
console.log(user1);

//podriamos cambiarles los valores a las propiedades que ya tiene, pero no añadirle o quitarle propiedades
Object.seal();

const user2 = Object.seal({ id:1 });
user2.name = 'Raquel';  // no lo añade
user2.id = 2;           // si lo cambia
console.log(user2);