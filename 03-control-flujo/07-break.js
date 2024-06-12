let i = 0;
while( i < 6){
    i++;
    if(i === 2){
        continue; //vuelve al inicio, no pasa por el console.log
    }
    if(i === 4){
        break;    //detiene la ejecucion del bucle
    }
    console.log(i);
}