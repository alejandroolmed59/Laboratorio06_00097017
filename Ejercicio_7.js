function calcularIncerteza(array) {
    let suma = 0;
    let promedio = 0;
    let incerteza = 0;
    let longitud=array.length;
    let exp = 0;
    array.forEach(element => {
        suma += element;
    });
    promedio = (suma / longitud);
    array.forEach(element => {
        exp += (element - promedio)**(2);
    });
    incerteza = ((1/(longitud-1))*exp)**(1/2);
    console.log("el valor promedio es= "+promedio+" y el valor de la incerteza= "+incerteza);
}