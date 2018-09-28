function conseguirTipo(array, tipoDato){
    let aux=[];
    array.forEach(element => {
        if (typeof element==tipoDato) {
            aux.push(element);
        }
    });
    return aux;
}