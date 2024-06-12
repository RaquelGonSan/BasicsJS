let array = [2, 5, 25, -5 , 15, 85, 1];
let nums = getMenorMayor(array);
console.log(nums);

function getMenorMayor(arr){
    var menor = arr[0];
    let mayor = arr[0];
    for(numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}