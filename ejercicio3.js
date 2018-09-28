function contarDatos(array) {   
    Tipocadena = 0;
    Tiposimbolo = 0;
    Tipobooleano = 0;
    Tipobjeto = 0;
    Tipofunction = 0;
    Tipnumerico = 0;
    Tipoundefined = 0;
    array.forEach(element => {
        if(typeof element == 'undefined'){
            Tipoundefined++;
        }
        if(typeof element == 'number'){
            Tipnumerico++;
        }
        if(typeof element == 'object'){
            Tipobjeto++;
        }
        if(typeof element == 'string'){
            Tipocadena++;
        }
        if(typeof element == 'symbol'){
            Tiposimbolo++;
        }
        if(typeof element == 'function'){
            Tipofunction++;
        }
        if(typeof element == 'boolean'){
            Tipobooleano++;
        }
    });
    console.log("Symbols: " + Tiposimbolo);
    console.log("Undefineds: " + Tipoundefined);
    console.log("Objects: " + Tipobjeto);
    console.log("Numbers: " + Tipnumerico);
    console.log("Booleanos: " + Tipobooleano);
    console.log("Strings: " + Tipocadena);
    console.log("Functions: " + Tipofunction);
    return;
}
