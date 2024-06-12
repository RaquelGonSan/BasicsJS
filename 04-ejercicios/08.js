let pares = [
    [1, {name: 'Nicolas'}],
    [2, {name: 'Roberto'}],
    [3, {name: 'Martin'}],
]

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

let resultado = toCollection(pares);
console.log(resultado);


function toCollection(arr){
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}