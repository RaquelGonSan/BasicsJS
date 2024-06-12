//LAS FUNCIONES SON OBJETOS DE PRIMERA CLASE:
//tienen propiedades como los Objetos
//podemos asignarlas a otras variables o a otras constantes
//las podemos pasar como argumentos en otras funciones
//podemos retornar otras funciones dentro de estas

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const usu = Usuario
let user = new Usuario('Raquel');
console.log(user);




function of(Fn, arg){
    return new Fn(arg);
}
let user1 = of(Usuario, 'Raquel');
console.log(user1);


function returned() {
    return function(){
        console.log('Hola mundo');
    }
}

let saludo = returned();
saludo();