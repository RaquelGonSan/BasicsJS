let obj = {};
let obj2 = new Object();



// new Array(); []
// new String(); "" '' ``
// new Number(); 12
// new Boolean(): true false

//si lo creamos asi el typeof sera de tipo Object


function Usuario(){
    this.name = 'Raquel';
}

let user = new Usuario();
console.log(user.constructor);


//contruir las variables de distina manera supone que el tipo cambia
//hay que tener en cuenta intentarutilizar siempre el mismo metodo para tu codigo
//para acceder al valor de un string literal, lo mejor es con valueof
const s1 = "1+1";
const s2 = new String("1+1");
console.log(s1, s2);
console.log(s2.valueOf());

