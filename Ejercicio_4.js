function sumi(array){
    for (let i = 0; i < array.length/2; i++) {
        console.log(array[i]+array[array.length-i-1]);
    }
}