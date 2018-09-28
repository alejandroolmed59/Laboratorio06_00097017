function adivinanza(){
    let array=[];
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor((Math.random() * 100) + 1));
    }
    let numero=prompt("Adivine el numero");
    let flag=0;

   array.forEach(element => {
        if(element==numero){
            console.log("Gano!!");
            flag=1;
        }
    });
    if(flag==0){
        console.log("Perdiste :(");
    }
}