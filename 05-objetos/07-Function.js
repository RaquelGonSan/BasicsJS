function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando...');
    }
}

//{} = this
let punto = {z:7};
//con esto extendemos un objeto que hayamos definido anteriormente 
Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);

console.log(punto);



//NUINCA SE UTILIZA ASI

// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//      this.dibujar = function() {
//         console.log('Dibujando...');
//     }
// `);

// const p = new Point(1, 2);

// console.log(p);



