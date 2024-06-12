let array = [2, 5, 7, 15, -5, -100, 55];

let resultado = cuantosPositivos(array);
console.log(resultado);


function cuantosPositivos(arr){
    let countP  = 0;
    for(numero of arr){
        suma = numero > 0 ? countP +=1 : countP +=0;
    }
    return suma;

}