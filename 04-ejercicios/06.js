
let resultado = precioMasImpuesto(19.90, 0.15);
console.log(resultado);

function precioMasImpuesto(precio,impuesto){
    return precio + precio * impuesto;

}