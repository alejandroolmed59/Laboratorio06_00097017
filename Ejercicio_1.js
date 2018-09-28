function ocurrencias(array, numero){
    let contador=0;
    array.forEach(function(element){
        if(numero==element){
            contador++;
        }
    });
    console.log(contador);
    return contador;
}