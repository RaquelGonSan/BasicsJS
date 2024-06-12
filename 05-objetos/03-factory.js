
/*let user = {
    id: 1,
    email : 'raquel@gmail.com',
    nombre: 'Raquel',
    activo: true,
    recuperarClave: function() {
        console.log('recuperando clave');
    },
}*/


function crearUsuario(name, email){
    return {
        email,
        nombre: name,
        activo: true,
        recuperarClave: function() {
            console.log('recuperando clave');
        },
    }
}

let user1 = crearUsuario('Pepe', 'pepe@gmail.com');
let user2 = crearUsuario('Jaun', 'juan@gmail.com');

console.log(user1, user2);