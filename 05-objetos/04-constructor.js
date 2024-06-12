// { id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () {  // metodo -> es una funcion que fua asignada a la propiedad de un Objeto
        console.log('recuperando clave');
    }
}

let usuario = new Usuario();
console.log(usuario);