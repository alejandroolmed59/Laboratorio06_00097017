function sumaMatriz(matrizA, matrizB){
    let matrizC=[];
    let contMA1=0;
    let contMA2=0;
    for (let i = 0; i < matrizA.length; i++) {
        contMA1++;
        for (let j = 0; j < matrizA[i].length; j++) {
            contMA2++;       
        }
    }
    let contMB1=0;
    let contMB2=0;
    for (let i = 0; i < matrizB.length; i++) {
        contMB1++;
        for (let j = 0; j < matrizB[i].length; j++) {
            contMB2++;
        }
    }
    if(contMA1==contMB1 && contMB2==contMA2){
        for (let i = 0; i < matrizA.length; i++) {
            for (let j = 0; j < matrizA[i].length; j++) {
                matrizC.push()
            }
        }
    }else{
        console.log("Las matrices no tienen las mismas dimensiones")
    }
}


let matrizA=[[0,1,3],[5,2,6],[1,2,7]];
let matrizB=[[0,1,3],[5,2,6],[1,2,7]];