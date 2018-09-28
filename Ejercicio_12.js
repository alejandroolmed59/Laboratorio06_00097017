function mostrarMenu(){
    console.log("1.Ingresar \n2.Buscar\n3.Modificar\n4.Elimar\n5.Mostrar todos\n6.Salir")
}
function menu(opcion){
    switch(opcion){
        case 1:
            Ingresar();
            break;
        case 2:
            Buscar();
            break;
        case 3:
            Modificar();
            break;
        case 4:
            Eliminar();
            break;
        case 5:
            MostrarTodos();
            break;
        case 6:
            console.log("Adios");
            isRunning=false;
            break;
        default:
            console.log("Adios");
            isRunning=false;
            break;
    }
}
function Ingresar(){
    var nombre= prompt("Nombre");
    var apellido= prompt("Apellido");
    var fechaNac= prompt("Fecha Nacimiento ");
    var telefono= prompt("Telefono");
    var email= prompt("Email");
    arregloUsuarios.push(new Usuario(nombre, apellido, fechaNac, telefono, email));
}
function Buscar(){
    var nombre= prompt("Nombre");
    var apellido= prompt("Apellido");
    arregloUsuarios.forEach(element => {
        if(element.nombre==nombre && element.apellido==apellido){
            console.log(element.nombre);
            console.log(element.apellido);
            console.log(element.fechaNac);
            console.log(element.telefono);
            console.log(element.email);
        }
    });
}
function Modificar(){
    var nombre= prompt("Nombre del que quiere modificar");
    var apellido= prompt("Apellido del que quiere modificar");
    var indice=0;
    for (let i = 0; i < arregloUsuarios.length; i++) {
        if(arregloUsuarios[i].nombre==nombre && arregloUsuarios[i].apellido==apellido){
            arregloUsuarios[i].telefono=prompt("Nuevo telefono");
            arregloUsuarios[i].email=prompt("Nuevo Email");
        }
    }
}
function Eliminar(){
    var nombre= prompt("Nombre");
    var apellido= prompt("Apellido");
    var indice=0;
    for (let i = 0; i < arregloUsuarios.length; i++) {
        if(i.nombre==nombre && i.apellido==apellido){
            indice=i;
        }
    }
    arregloUsuarios.splice(indice, 1);
}
function MostrarTodos(){
    for (let i = 0; i < arregloUsuarios.length; i++) {
        console.log("Usuario "+(i+1));
        console.log(arregloUsuarios[i].nombre);
        console.log(arregloUsuarios[i].apellido);
        console.log(arregloUsuarios[i].fechaNac);
        console.log(arregloUsuarios[i].telefono);
        console.log(arregloUsuarios[i].email);
    }
}


//"main"
var isRunning=true;
var arregloUsuarios=[];
class Usuario{
    constructor(nombre, apellido, fechaNac, telefono, email){
        this.nombre=nombre;
        this.apellido=apellido;
        this.fechaNac=fechaNac;
        this.telefono=telefono;
        this.email=email;
    }
}   

while(isRunning){
    mostrarMenu();
    var opcion= parseInt(prompt("Que desea hacer xd?"));
    menu(opcion);
}
