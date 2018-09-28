function creadorUsuario(nombre, apellido, fechaNac, telefono, email){
    var Usuario={
        name:nombre,
        lastName:apellido,
        BirthDay:fechaNac,
        tel:telefono,
        correo:email
    };
    for (const key in Usuario) {
        console.log(Usuario[key]);
    }
}