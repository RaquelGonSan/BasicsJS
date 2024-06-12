

let resultado = getbyId([1,2], 1)
console.log(resultado);

function getbyIdx(arr, idx){
    if(idx < 0  || arr.length <= idx){
        return 'elemento no existe';
    }
    return arr[idx];
}
 

