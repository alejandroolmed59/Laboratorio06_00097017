function sumANDprom(array){
    let longitud=array.length;
    let sum=0;
    array.forEach(element => {
        sum+=element;
    });
    console.log(sum);
    console.log(sum/longitud);
}