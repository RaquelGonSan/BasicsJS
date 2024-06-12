/**
 *crear algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */

 let array = [
    {
        id: 1,
        name: 'Nicolas',
    }, 
    {
        id: 2,
        name: 'Roberto',
    },
    {
        id: 3,
        name: 'Martin',
    },

]
let pares = [
    [1, {id:1, name: 'Nicolas'}],
    [2, {id:1, name: 'Roberto'}],
    [3, {id:1, name: 'Martin'}],
]

let resultado = toPairs(array);
console.log(resultado);



function toPairs(arr){
    let pairs = [];
    for( idx in arr){
        let elemento = arr [idx];
        pairs[idx] = [elemento.id, elemento];
}
return pairs;

}

