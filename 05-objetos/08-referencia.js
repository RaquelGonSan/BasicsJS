let a = 1;
let b = a;

b++;
console.log(a, b);


let objetoA = {};
let objetoB = objetoA;
let objetoC = { prop: 1};
objetoB.prop = 1;
console.log(objetoA, objetoB);


function suma(n){
    n++
}

function sumaObjeto(n){
    n.prop++
}

suma(a);
console.log(a);

sumaObjeto(objetoC);
console.log(objetoC);


//LOS DATOS PRIMITIVOS COMO VARIABLES SE COPIAN
//LOS DATOS DE REFERENCIA COMO LOS OBJETOS, ARRAYS O FUNCIONES SE REFERENCIAN