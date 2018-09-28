var arregloUsuarios=[];
function almacenadordeUsuarios(nombre, apellido, fechaNac, telefono, email){
    var Usuario={
        name:nombre,
        lastName:apellido,
        BirthDay:fechaNac,
        tel:telefono,
        correo:email
    };
    arregloUsuarios.push(Usuario);

    arregloUsuarios.forEach(element => {
        console.log(element.name);
    });
}